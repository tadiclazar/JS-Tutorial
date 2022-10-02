const {readFileSync, writeFileSync} = require('fs');


const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);
//writeFileSync('./content/result-sync.txt', 'Hello from the result sync file.' + `\n${first}\n${second}`);
writeFileSync('./content/result-sync.txt', 'String appended', {flag: 'a'});