const EventEmitter = require('events')
const customEmiiter = new EventEmitter();

customEmiiter.on('response', (name, id) => {
    console.log(`data recieved from user ${name} with id number ${id}`)
})
customEmiiter.on('response', () => {
    console.log('some other logic here')
})


customEmiiter.emit('response', 'John', 34)