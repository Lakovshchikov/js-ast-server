const fs = require('fs');

function writeData(filename, data, callback) {
    const path = `./output/${filename}.json`;
    fs.writeFile(path, JSON.stringify(data), 'utf8', callback);
}

module.exports = {
    writeData: writeData
}