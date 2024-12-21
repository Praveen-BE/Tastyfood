# Namaste React

## 1. Inception

<details> <summary>Read</summary>

Topics

- Hello world from HTML
- Hello world from Javascript
- Hello world from React

Homework

1.  CDN
2.  Cross Origin

</details>

## 2. Ignition our app

<details> <summary>Read</summary>

Not only React,

React, lot of other packages, lot of other library, and lot of js code making our app Fast.

npm does not have a full form😂

- package.json is a configuration of out npm
- our project depends on lot of packages those packages are dependencies.
- npm take care of the version of those packages

### Bundlers :-

- most important package

what is bundlers:-

html, css, js whole code bundle together.
webpack, parcel, vite these are Bundlers.

- Create react app behind the scenes uses webpack, babel
- We will use parcel

```base
        npm install -D parcel
```

homework:-

1. Dev Dependencies (require in develpment face)
2. Normal Dependencies (use in production also)

parcel : "^2.8.3"

- ^ - npm automatcally updates its minor versions.

parcel : "~2.8.3"

- ~ - npm automatcally updates its minor versions.

package-lock.json

- record every version of the package or dependencies
- package.josn - Keeps approximate version
- package-lock.json - keeps Exact version
- search in integrity in lock.json - that is Hash whatever right now in my machine it's same version deployed in production.

node_modules

- it is huge
- parcel has own dependencies
- every package has its own dependency

### parcel is beast

- does a lot of things
- parcel needs a help of babel also, browserlist also

whatever you can generate don't put on git hub

```bash
        npx parcel index.html
```

- npm - calling a package
- npx - executing the package

CDN - react is not a good way

int termainal Ctrl+C

```bash
        npm install react
```

- see in package.json
- see in nodemodule

```bash
       npm install react-dom
```

remove cdn link
re-run

```bash
        npx parcel index.html
```

```bash
<script type="module scr="./index.js">
```

### parcel :- Read parcel docs GIVE Claps to parcel👏👏👏👏👏👏

- Dev Build
- Local Server
- HMR = Hot module Replacement
- File watching algorithm written in c++
- cashing - Faster Builds
- image optimization
- minification
- Bundling
- Compressing
- Consistant Hashing
- Code splitting
- Differential Bundling (for old browsers)
- Diagnostic
- Error Handling
- Tree shaking
- Lazy mode
- Different Dev and production bundle

Be curious

for production builds remove main : "index.js" from package.json

server also install nodemodule for its own.

```bash
"browserlist": [
    "last 2 chrome version",
    "last 2 firefox version"
  ],
```

browserlist.dev website - search last 2 chrome versions

we see this episode our own create react app.

</details>

## 3. Laying the Foundation

### part-1

<>
npx parcel index.html this is lengthy

we short command so in package.json

```base
        "script": {
                "start" : "parcel index.html",
                "build" : "parcel build index.html"
        }
```

If you are going to new company work on new project don't know how to start

- -> go to package.json
- -> find script
- -> you will get it the exact command to run the project

to start the project "run" is optional

```base
        npm run start
```

to build the project "run" is required

```base
        npm run build
```

Just like dom element react has react element.
kind of equelant to dom element.

react element end of the object. When they render the element to the dom it became HTML.

### part - 3

when react was build this is core of react

```base
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
console.log(heading);
```

facebook developer create JSX

- Javascript syntex to create React element
- JSX is not part of React. JSX different React is Different.
- we can write React without JSX. Bus jsx make developer life easy.
- jsx is conversion where the html and js merge together.

```base
        const jsxheading = <h1>Namaste React Using JSX</h1>;
```

this is not html this is valid jsx.
jsx- is not HTML in JS

- jsx is different
- HTML is different
- React is different
- Everything is different 😂

JSX - HTML like or XML - like syntex.
