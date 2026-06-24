const EventEmitter = require('events');

const domainEmitter = new EventEmitter();
domainEmitter.setMaxListeners(50);

module.exports = domainEmitter;
