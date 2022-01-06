// Copyright 2013 The Gorilla WebSocket Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package impl

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/jazzsewera/reactive-raven/core/internal/domain"
)

var addr = flag.String("addr", ":8080", "http service address")

func serveHome(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL)
	if r.URL.Path != "/" {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}
	if r.Method != "GET" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	http.ServeFile(w, r, "home.html")
}

func servePush(hub *Hub, w http.ResponseWriter, r *http.Request) {
	if r.Method == "OPTIONS" {
		w.Header().Add("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Control-Request-Method", "POST, GET, OPTIONS, DELETE")
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Add("Connection", "keep-alive")
		return
	}
	if r.URL.Path != "/push" {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	message_bytes, err := ioutil.ReadAll(r.Body)

	if err != nil {
		http.Error(w, "Unprocessable", http.StatusUnprocessableEntity)
		return
	}

	fmt.Println(string(message_bytes))
	message := &domain.Message{}
	err = json.Unmarshal(message_bytes, message)

	if err != nil {
		http.Error(w, "Unprocessable", http.StatusUnprocessableEntity)
		return
	}

	hub.broadcast <- *message
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusCreated)
}

func serveMessages(hub *Hub, w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/messages" {
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
	http.HandleFunc("/", serveHome)
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(hub, w, r)
	})
	http.HandleFunc("/push", func(w http.ResponseWriter, r *http.Request) {
		servePush(hub, w, r)
	})
	http.HandleFunc("/messages", func(w http.ResponseWriter, r *http.Request) {
		serveMessages(hub, w, r)
	})
	err := http.ListenAndServe(*addr, nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
