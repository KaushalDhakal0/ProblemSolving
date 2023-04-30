const {Worker, parentPort} = require('worker_threads');

//const worker = new Worker(__filename);

parentPort.on('message', message => {
   console.log("Message Received From parent ", message);
   parentPort.postMessage("Hello from Worker O");
});

//worker.postMessage("Hello From Worker Thread");
