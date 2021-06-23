//Common JS - Every file is a module (default)
//Modules - Encapsulated Code (share only the minimum)

const names = require ('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.peter);
sayHi(names.john);
