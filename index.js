/**
 * Require .json files with comments
 *
 * @license MIT
 * @version 1.1.0
 * @author Dumitru Uzun (DUzun.Me)
 */

/*jshint esversion: 9, node:true*/

const VERSION = '1.1.0';

const fs = require('fs');
const path = require('path');

const JSON6 = require('json-6');

/// Require a JSON file with comments
function requireJSON6(filename) {
    if ( path.extname(filename) == '' ) {
        const extensions = ['.json6', '.json'];
        for(var i=0, l = extensions.length, ext; i<l; ++i) {
            ext = extensions[i];
            if(fs.existsSync(filename + ext)) {
                filename += ext;
                break;
            }
        }
    }
    try {
        return JSON6.parse(stripBOM(fs.readFileSync(filename, 'utf8')));
    }
    catch(error) {
        error.message = filename + ": " + error.message;
        throw error;
    }
}

/// Override require for .json extension
function replace_require() {
    require.extensions['.json'] = function(module, filename) {
        module.exports = requireJSON6(filename);
    };
}

/// Register .json6 extension for require
require.extensions['.json6'] = function(module, filename) {
    module.exports = requireJSON6(filename);
};

/// Exports:

requireJSON6.parse           = JSON6.parse.bind(JSON6);
requireJSON6.stringify       = JSON6.stringify.bind(JSON6);
requireJSON6.replace         = replace_require;
requireJSON6.VERSION         = VERSION;

module.exports = requireJSON6;


/// Helpers:

function stripBOM(content) {
    // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
    // because the buffer-to-string conversion in `fs.readFileSync()`
    // translates it to FEFF, the UTF-16 BOM.
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
}
