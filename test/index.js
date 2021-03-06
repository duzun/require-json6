
const fs          = require('fs');
const asert       = require('assert');
const requireJSON = require('..');


// 1.
var config = requireJSON(__dirname + "/config6"); // .json6 file
asert.equal(config.name, 'json6', 'yes');
asert.equal(config.unicorn, 'cake');
asert.equal(config.array.join('|'), [1,2,3,].join('|'));
asert('nothing' in config);
asert.equal(config.nothing, undefined);
asert.equal(config.while, true);
asert.equal(config.to, Infinity);
asert.equal(config.binary, 0b01101001);
asert.equal(config.octal, 0123);
asert.equal(config.this, 'is a multi-line string');

// 2.
var config = require('./config6'); // .json6 file
asert.equal(config.name, 'json6', 'yes');
asert.equal(config.unicorn, 'cake');
asert.equal(config.array.join('|'), [1,2,3,].join('|'));

// 3.
var config = requireJSON(__dirname + '/.configrc'); // no extension file
asert.equal(config.noext, true);


requireJSON.replace();

// 4.
var config = require("./config"); // .json file
asert.equal(config.name, 'json', 'yes');
asert.equal(config.unicorn, 'cake');
asert.equal(config.array.join('|'), [1,2,3,].join('|'));

// 5.
var configStr = fs.readFileSync(__dirname + "/config6.json6", 'utf8');
var config = requireJSON.parse(configStr);
asert.equal(config['one-line'], 'comment 1');
asert.equal(config['multi-line'], 'comment 2');
