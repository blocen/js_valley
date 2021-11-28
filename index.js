const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', () => {
  console.log('yum...');
})
eventEmitter.emit('lunch');


const myModule = require('./my_module');
console.log(myModule);
