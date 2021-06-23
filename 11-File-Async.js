const { writeFile, readFile} = require ('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error){
        console.log(error);
        return;
    }
    const first = result;
    console.log(first);
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error){
            console.log(error);
            return;
        }
        const second = result;
        console.log(second);
writeFile(
    './content/result2.txt', `This is the result : ${first}, ${second}`
, (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log('Done with this task');
})
  })
})

console.log('starting the next task');