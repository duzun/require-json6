
var fs          = require('fs');
var asert       = require('assert');
var requireJSON = require('..');


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

requireJSON.replace();

// 3.
var config = require("./config"); // .json file
asert.equal(config.name, 'json', 'yes');
asert.equal(config.unicorn, 'cake');
asert.equal(config.array.join('|'), [1,2,3,].join('|'));

// 4.
var configStr = fs.readFileSync(__dirname + "/config6.json6", 'utf8');
var config = requireJSON.parse(configStr);
asert.equal(config['one-line'], 'comment 1');
asert.equal(config['multi-line'], 'comment 2');



console.log(config);
