// function sayHello(name){
//     console.log("Hello " + name);
// }

// sayHello("Aldo")

//global modules 

// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// const logger = require('./logger');

// console.log(logger); 
// logger.log('message'); 

// //path module
// const path = require('path'); 

// var pathObj = path.parse(__filename);
// console.log(pathObj); 

// // OS module
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();



// console.log(`Total Memory: ${totalMemory}`); 
// console.log(`Free Memory: ${freeMemory}`); 

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files)

// fs.readdirSync('./', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// class EventEmitter

// const EventEmitter = require('events');

// const Logger = require('./logger.js');
// const newLogger = new Logger();

// newLogger.on('MessageLogged', (arg) => {
//     console.log('Listener Called', arg);

// });

// newLogger.on('logging',(eventArg)=>{
//     console.log(eventArg.message);
// });

// newLogger.log('message');

// Raise: Loggin (data: message)
// emitter.emit('logging', {message: 'We are calling the server, please wait'});

const http = require ('http');

const server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {

    res.write(JSON.stringify([1, 2, 3])); 
    res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000')
