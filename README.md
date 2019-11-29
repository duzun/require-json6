# require-json6 [![Build Status](https://travis-ci.org/duzun/require-json6.svg?branch=master)](https://travis-ci.org/duzun/require-json6)

Require JSON6 files in node - a better JSON for ES6 era

JSON6 is more human friendly, can contain comments, trailing commas, unquoted keys amd more!

## Install

```sh
npm i require-json6
```

## Usage

Include the lib:

```js
const requireJSON6 = require('require-json6');
```

1) Require a JSON6 file

```js
let config = require("./config.json6");
```

2) Load a `.json` file in JSON6 format

```js
let config = requireJSON6("./config.json");
```

3) Load a .js file as JSON6 format.
This is useful if you don't like the `.json6` file extension
and prefer to keep JSON6 in `.js` files.

```js
let config = requireJSON6("./config.js");
```

3) Parse a JSON6 string

```js
let config = requireJSON6.parse('{ name: /*a very important option*/ "value" }');
```

4) Use JSON6 for all `require(.json)` calls

```js
require('require-json6').replace();
let config = require("./config"); // can be config.json, config.json6 or config.js
```

## Example of JSON6

The following is a contrived example, but it illustrates most of the features:

```js
{
    foo: 'bar',
    while: true,
 
    this: 'is a \
multi-line string',
 
    // this is an inline comment 
    here: 'is another', // inline comment 
 
    /* this is a block comment
       that continues on another line */
 
    hex: 0xDEADbeef,
    half: .5,
    delta: +10,
    to: Infinity,   // and beyond! 
 
    finally: 'a trailing comma',
    oh: [
        "we shouldn't forget",
        'arrays can have',
        'trailing commas too',
    ],
}
```
