#!/usr/bin/env node

const fs = require('fs');

// create a directory
fs.mkdirSync('my-folder');

// create a file inside the directory
fs.writeFileSync('my-folder/my-file.txt', 'Hello, world!');

// create a subdirectory inside the directory
fs.mkdirSync('my-folder/my-subfolder');

// create a file inside the subdirectory
fs.writeFileSync('my-folder/my-subfolder/my-subfile.txt', 'Hello, subworld!');

console.log('Folder structure created');


console.log(`structure created`)

const someFunction = (text) => {
    return text == 'hi'
}

module.exports = someFunction