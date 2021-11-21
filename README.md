# Reactive Raven

A Proof-of-Concept application to showcase the reactive approach of pushing
data asynchronously to the UI.


## Starting

You will need `make`, `go`, and `yarn` to start the whole stack. Use `./makew`
wrapper for make, as it has parallel execution set, needed for the dev servers
to start simultaneously.

Sync the dependencies with `./makew install`. Start the dev servers with
`./makew dev`.


## The Why

When searching for the optimal solution for pushing the data to the UI, I came
across two major solutions:
- Redux Thunks - okay for fetching some data on user interaction, e.g. on a
  button click, but it provides virtually full implementation lock-in, and
  very little separation of concerns. Fetching data is an action dispatched on
  a store, so external communication and storing data are dependent on each
  other. More information on thunks
  [here](https://redux.js.org/usage/writing-logic-thunks).
- Redux Sagas - good for managing side effects with plain JavaScript, but they
  use [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
  that yield a different type every time, so they are a nightmare to use with
  strict TypeScript.

Both thunks and sagas don't provide the separation of concerns I want to
achieve. Fetching or acting upon pushed data is a different concern than
storing it.

The user shouldn't dispatch an action on a _store_, when all they want to do
is fetch data. Of course, the data can be immediately stored after fetching,
but this behavior should be injected, so that there is no store implementation
lock-in.


## The How

As of 2021-11-01 I haven't studied the [ReactiveX](http://reactivex.io/)
framework very thoroughly, but it looks promising, especially being based on
the [Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern), which
seems to be the right solution for the problem. When pushing the data
asynchronously to the UI, it _feels_ natural to subscribe to the observable
data stream from the backend, and write a simple method what to do with it. I
don't want to manually model time, I just want to act on the data **when it
arrives**.

The basic setup I want to implement will be a couple of clients pushing some
messages to the backend, that will push the aggregated messages to one live
dashboard, that will asynchronously update whenever a new message arrives.

```
Client \
Client --> Backend --> Live Dashboard
Client /
```


### Implementation details

All of the frontend components will be implemented using React, RxJS, and Redux.

Backend will be implemented using Go. Why Go? Because handling concurrency is
very elegant with coroutines and channels, Go is performant, and many
microservices are written in it.


## License

The project is licensed under MIT License. Copyright 2021 Blazej Sewera
