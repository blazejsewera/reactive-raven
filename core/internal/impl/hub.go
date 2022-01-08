package impl

import (
	"encoding/json"
	"log"

	"github.com/jazzsewera/reactive-raven/core/internal/domain"
)

type Hub struct {
	Messages   []domain.Message
	clients    map[*Client]bool
	broadcast  chan domain.Message
	register   chan *Client
	unregister chan *Client
}

func newHub() *Hub {
	return &Hub{
		broadcast:  make(chan domain.Message),
		register:   make(chan *Client),
		unregister: make(chan *Client),
		clients:    make(map[*Client]bool),
	}
}

func (h *Hub) GetMessagesJson() []byte {
	messages_bytes, err := json.Marshal(h.Messages)
	if err != nil {
		log.Println("could not serialize messages")
	}
	log.Printf("pushed %d messages to ui", len(h.Messages))
	return messages_bytes
}

func (h *Hub) run() {
	for {
		select {
		case client := <-h.register:
			h.clients[client] = true
		case client := <-h.unregister:
			if _, ok := h.clients[client]; ok {
				delete(h.clients, client)
				close(client.send)
			}
		case message := <-h.broadcast:
			is_new_message := true
			for _, m := range h.Messages {
				if m.Id == message.Id {
					is_new_message = false
				}
			}
			if is_new_message {
				h.Messages = append(h.Messages, message)
			}
			message_bytes, err := json.Marshal(message)
			if err != nil {
				log.Printf("could not serialize message")
			}
			for client := range h.clients {
				select {
				case client.send <- message_bytes:
				default:
					close(client.send)
					delete(h.clients, client)
				}
			}
		}
	}
}
