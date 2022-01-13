# Reactive Raven

A Proof-of-Concept application to showcase the reactive approach of pushing
data asynchronously to the UI.

This project is mainly an experiment if this kind of reactive approach can be
used in my other project, [notipie](https://github.com/jazzsewera/notipie).


## Starting

### Quickest launch

```bash
make      # to build the application
make run  # to run the application
```

Use `run-prod` to start the server on `0.0.0.0:8080`, or just go to `./dist`
(`cd ./dist`), and run `./rr -addr <address:port>`.

### Development launch

You will need `make`, `go`, and `yarn` to start the whole stack. Use `./makew`
wrapper for make, as it has parallel execution set, needed for the dev servers
to start simultaneously.

Sync the dependencies with `make install`. Start the dev servers with
`./makew dev`.

Open the preview of the application with `./makew preview` (recommended for
finding out if the statically-built version of ui works properly).


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

[ReactiveX](http://reactivex.io/) turned out to be the best framework for this
specific PoC. Being based on the [Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern),
it seemed to be the right solution for the problem. When pushing the data
asynchronously to the UI, it _feels_ natural to subscribe to the observable data
stream from the backend, and write a simple method what to do with it.

See the `./ui/src/net/rx` directory for example usages of this framework in
the project.

I don't want to manually model time, I just want to act on the data **when it arrives**.

The basic setup is a couple of clients pushing some messages to the backend,
that will push the aggregated messages to one live dashboard, that will
asynchronously update whenever a new message arrives.

```
Client UI \
Client UI --> Backend --> Live Dashboard
Client UI /
```


### Implementation details

All of the frontend components will be implemented using React, RxJS, and Redux.

Backend will be implemented using Go. Why Go? Because handling concurrency is
very elegant with coroutines and channels, Go is performant, and many
microservices are written in it.


## License

The project is licensed under MPL-2.0 License. Copyright 2021 Blazej Sewera
