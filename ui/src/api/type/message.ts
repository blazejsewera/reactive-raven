export type ApiMessage = {
  username: string
  timestamp: string
  title: string
  subtitle?: string
  body?: string
  id?: string
}

// example:
// { "username": "Test", "timestamp": "a", "title": "Test title", "subtitle": "Test subtitle", "body": "Test body.", "id": "1234" }
