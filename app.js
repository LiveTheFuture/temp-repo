const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', 'utf8');

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.text',{ highWaterMark: 90000})
//const stream = createReadStream('../content/big.text', {encoding: 'utf8'})

stream.on('data', (result) => {
console.log(result)
}) 

stream.on('error', (err) => {
console.log(err)
})