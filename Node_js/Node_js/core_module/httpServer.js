const http=require('http');

const server=http.createServer((req,resp)=>{
resp.end('Hello');
})

module.exports={server};