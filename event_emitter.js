const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ${name}, ${id}`);
});


customEmitter.emit('response', 'John', 34);