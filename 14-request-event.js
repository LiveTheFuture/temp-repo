const http = require ('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

//USING EVENT EMITTER API
const server = http.createServer();
//emit request event
//listen to it

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000);