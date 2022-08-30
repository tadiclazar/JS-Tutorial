const {createReadStream} = require('fs');

// {highWaterMark = read buffer size (int)}
const stream = createReadStream("./content/big.txt", {encoding: 'utf8'});

stream.on('data', (chunk) => {
    console.log(`Recieved ${chunk.length} bytes of data. Data is:\n${chunk}`);
});

stream.on('error', (err) => {
    console.log(err);
});