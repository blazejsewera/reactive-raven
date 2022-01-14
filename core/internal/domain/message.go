package domain

type Message struct {
	Username  string `json:"username"`
	Timestamp string `json:"timestamp"`
	Title     string `json:"title"`
	Subtitle  string `json:"subtitle"`
	Body      string `json:"body"`
	Id        string `json:"id"`
}

func (m Message) Validate() bool {
	return len(m.Title) > 0 && len(m.Username) > 0 && len(m.Timestamp) > 0
}
