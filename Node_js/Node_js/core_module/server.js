const ser=require('./httpServer.js');

ser.server.listen(2002,()=>{
	console.log('server is running......');
})