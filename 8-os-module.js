const os = require ('os');

//information about user
const user = os.userInfo();

console.log(user)

//method for system uptime in secs

console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);