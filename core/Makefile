.PHONY: clean

all: clean sync tidy lint build test

build:
	go build github.com/jazzsewera/reactive-raven/core/cmd/rr

run:
	go run github.com/jazzsewera/reactive-raven/core/cmd/rr

test:
	go test ./...

lint:
	go vet ./...

format:
	go fmt ./...

sync:
	go mod download

tidy:
	go mod tidy

clean:
	rm -f ./rr
	go clean
