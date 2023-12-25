const { strict } = require('assert');
const fs = require('fs');

// Write to file
fs.writeFileSync('Welcome.txt', 'Hello Node')

// Read from file
const file= fs.readFileSync('Welcome.txt','utf8' );
console.log(file);

