package domain

type Message struct {
	Username  string `json:"username"`
	Timestamp string `json:"timestamp"`
	Title     string `json:"title"`
	Subtitle  string `json:"subtitle"`
	Body      string `json:"body"`
	Id        string `json:"id"`
}
