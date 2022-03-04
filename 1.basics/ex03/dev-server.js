import http from 'http';
import * as path from 'path';
import express from 'express';


const port = 9090;
const application = express().use(express.static(path.join(path.resolve('.'), 'public'))); //모듈에서는 독립적이기에 __dirname못씀

http
    .createServer(application)
    .on('listening', function(){
        console.info('http server runs on ' + port);
        console.info(`http server runs on ${port }`);
    })
    .listen(port);
