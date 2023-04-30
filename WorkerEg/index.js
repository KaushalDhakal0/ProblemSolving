const {isMainThread , Worker} = require('worker_threads');

    console.log("IN main thread", isMainThread);
    const workerOne = new Worker('./Worker.js');
    const workerTwo = new Worker('./Worker1.js');
    workerTwo.on('message', msg => console.log("Message from Worker Two : ", msg));
    workerOne.on('message', msg => console.log("Message from Worker One : ", msg));
//      const worker = new Worker(__filename);}else{

    workerOne.postMessage("Hello worker 1");
    workerTwo.postMessage("Hello Worker 2");



