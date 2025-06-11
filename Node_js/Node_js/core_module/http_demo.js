const { ifError } = require('assert');
const { log } = require('console');
const http=require('http');

const server=http.createServer((req,resp)=>{
resp.end('Hello');
})

server.listen(2000,()=>{
	console.log('server is running......');
})