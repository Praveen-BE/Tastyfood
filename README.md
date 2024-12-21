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

<details><summary>Read</summary>

### part-1

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

We code for Humans(developers) then Machine.

in browser console

```base
const number = 8;
```

```base
const heading = <h1 className="heading" tabIndex={1}>Namste React Using JSX</h1>;
```

js engine does not understand jsx. But js engine understand Ecma Script.

But how jsx work in my code

- Because of Parcel
- Even before the code goes to the js engine it is transpiled.
  and JS engine receive the code the Browser can understand.
- parcel is like manager in that it is happening by babel.
- babel is not create by facebook

JSX => React.createElement => React Element - JS Object => HTML Element(render)

Visit babel website.

- babel worklike abstract syntex tree
- not only coverting into react element. It is also work ES6 code understands in older browser.
- lot transpilation
- npm library (view library)
- go read doc in babel website.

homework

- how to use imagetag, imagesrc, anchor tag

Extension Akshay use

- prttier - code formatter
- Bracket pair colorization Toggle
- Es lint
- Better comments

### part - 4

Everythin in React are component - True

- header
- footer
- title
- card

Two tyep

- Class based components - OLD way (nobody uses now) (such a pain)
- Funtional components - New way (99.99% people use)

React funtional component is just a normal javascript function

- Function compont name it First letter capitals

```base
        const HeadingComponent = () => {
                return <h1>Namaste React Functional Component</h1>;
        }
```

this is functional component.

- a function that return a jsx code is functional components
- jsx is also react element So, a function that return a React element is React funtional component.

```base
        root.render(<HeadingComponent/>);
```

this is syntex that babel understand.

What is Component Composition :-

```base
const Title = () = (
        <h1 className="head"> Namaste React </h1>
)
        const HeadingComponent = () => {
                return (<div>
                <Title>
                <h1>Namaste React Functional Component</h1>;
                </div>)
        }
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<HeadingComponent>);
```

This is Component composition

- Component used in side Component
- You Composing two component one in another.

Arrow Function is the Industry Standard.

We can run every piece of Javascript code in that culrybraces in React.

jsx is mix of HTML and Javascript.

```base
        <div>
                {// here}
                <h1>Namaste</h1>
        </div>
```

we can put element into jsx or jsx into element function component in react.

if it create loop Browser will crash.

```base
        const data = api.getData();
        const HeadingComponent = () => {
                return (<div>
                {data}
                <h1>Namaste React Functional Component</h1>;
                </div>)
        }
```

if api has some malisious codes it will run in browser. It is called cross site script.

It can steal cookies, session value.

Bus JSX takes care of Injection Attacks.

JSX will Escape it.

Sanitizing the data and will pass it.

JSX prevents from cross site script attack for free

What are make web app fast not only React, it has babel, JSX

We don't even Deep dive into React.

</details>
