// Copyright 2013 The Gorilla WebSocket Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package impl

import (
	"encoding/json"
	"flag"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/jazzsewera/reactive-raven/core/internal/domain"
)

var addr = flag.String("addr", "localhost:8080", "http service address")

func serveUI(w http.ResponseWriter, r *http.Request) {
	log.Println("serveUI: ", r.URL)
	if r.URL.Path != "/" && r.URL.Path != "/dashboard" {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}
	if r.Method != "GET" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	http.ServeFile(w, r, "./ui/index.html")
}

func servePush(hub *Hub, w http.ResponseWriter, r *http.Request) {
	if r.Method == "OPTIONS" {
		w.Header().Add("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Control-Request-Method", "POST, GET, OPTIONS, DELETE")
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Add("Connection", "keep-alive")
		return
	}
	if r.URL.Path != "/push" && r.URL.Path != "/api/push" {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	message_bytes, err := ioutil.ReadAll(r.Body)

	if err != nil {
		http.Error(w, "Cannot read request", http.StatusBadRequest)
		return
	}

	log.Println(string(message_bytes))
	message := &domain.Message{}
	err = json.Unmarshal(message_bytes, message)

	if err != nil {
		http.Error(w, "Cannot deserialize request", http.StatusBadRequest)
		return
	}

	if !message.Validate() {
		http.Error(w, "Missing Title, Username, or Timestamp", http.StatusBadRequest)
		return
	}

	hub.broadcast <- *message
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusCreated)
}

func serveMessages(hub *Hub, w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/messages" && r.URL.Path != "/api/messages" {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}
	if r.Method != "GET" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(hub.GetMessagesJson())
}

func Serve() {
	flag.Parse()
	hub := newHub()
	go hub.run()
	uiServer := http.FileServer(http.Dir("ui"))
	http.HandleFunc("/", uiServer.ServeHTTP)
	http.HandleFunc("/dashboard", serveUI)
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(hub, w, r)
	})
	http.HandleFunc("/push", func(w http.ResponseWriter, r *http.Request) {
		servePush(hub, w, r)
	})
	http.HandleFunc("/messages", func(w http.ResponseWriter, r *http.Request) {
		serveMessages(hub, w, r)
	})
	http.HandleFunc("/api/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(hub, w, r)
	})
	http.HandleFunc("/api/push", func(w http.ResponseWriter, r *http.Request) {
		servePush(hub, w, r)
	})
	http.HandleFunc("/api/messages", func(w http.ResponseWriter, r *http.Request) {
		serveMessages(hub, w, r)
	})
	log.Printf("server is running on: %s\n", *addr)
	err := http.ListenAndServe(*addr, nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
