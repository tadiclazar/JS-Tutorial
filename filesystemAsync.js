const {readFile, writeFile} = require('fs');

readFile("./content/first.txt", 'utf-8', (err, result) => {
    if (err) {
        console.log("erorr reading file: " + err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log("erorr reading file: " + err);
            return;
        }
        const second = result;
        writeFile("./content/result-async.txt", `The result of async file: ${first}, ${second}`,
        (err, result) => {
            if (err) {
                return;
            }
            console.log(result);
        });
    });
});