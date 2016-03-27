#Purpose

The goal is to provide a simple skeleton project that can bundle together code using the [TypeScript](https://github.com/Microsoft/TypeScript) compiler; the bundle will use the [SystemJS](https://github.com/systemjs/systemjs) module loader. Tries to be as minimalist as is reasonably possible.

#Getting started

* Run npm install
* Don't run gulp tasks directly, use npm scripts. Why? Because forcing global npm installs leads to bad times.
* npm run start to serve from localhost and watch sass/ts/html for changes
* npm run typings install -- [args] for new typings (see [Typings](https://github.com/typings/typings))

#What you can do with this project

* Use TypeScript and ES6-style imports together
* Have TypeScript handle the bundling instead of webpack/browserify/requirejs/jspm
* Live reload
* SASS compilation

#What this project doesn't do
* Client side dependency management - you'll basically need to pull in/copy over dependencies and import said dependencies by path. It's not the worst thing in the world, but it's less convenient than other solutions out there.

#License

The MIT License (MIT)
Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.