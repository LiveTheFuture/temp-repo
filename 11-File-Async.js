const fs = require('fs');

console.log('starting the task');

const readFile = fs.readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err){
        throw err
    }
    console.log(data)
    console.log('starting the next one')
    fs.readFile('./content/subfolder/test.txt', 'utf8', (err, data) => {
        if (err){
            throw err;
        }
    console.log(data)

    const writeFile = fs.writeFile('./content/result.txt', 'I am the one in charge now', (err, data)=>{
        if (err) throw err
    })
    })
})

console.log('end of task')