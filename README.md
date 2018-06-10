# Boilerplate for VueJS Web App
[![Build Status](https://travis-ci.org/jsboilerplates/web-vuejs.svg?branch=master)](https://travis-ci.org/jsboilerplates/web-vuejs)
[![codecov](https://codecov.io/gh/jsboilerplates/web-vuejs/branch/master/graph/badge.svg)](https://codecov.io/gh/jsboilerplates/web-vuejs)
[![dependencies Status](https://david-dm.org/jsboilerplates/web-vuejs/status.svg)](https://david-dm.org/jsboilerplates/web-vuejs)
[![devDependencies Status](https://david-dm.org/jsboilerplates/web-vuejs/dev-status.svg)](https://david-dm.org/jsboilerplates/web-vuejs?type=dev)
[![](https://images.microbadger.com/badges/image/jsboilerplates/web-vuejs.svg)](https://microbadger.com/images/jsboilerplates/web-vuejs)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsboilerplates/web-vuejs/blob/master/LICENSE)

## Features
- VueJS 2, Vue Router 3, Vuex 3
- Unit Test with Jest and Vue Test Utils
- ES6, ESLint
- CI with Travis, Docker Build

## Installation

``` bash
# install dependencies
npm install

```

## Running the tests

``` bash
# run unit tests
npm run unit

# run all tests
npm test
```

## Build and Run

``` bash

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## Docker support

Build docker image

```
bash Dockerbuild.sh
```

Run docker container

```
docker run -d --name webvuejs -p 8000:8000 jsboilerplates/web-vuejs
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jsboilerplates/web-vuejs/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
