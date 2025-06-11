const http=require('http');
const fs=require('fs');
const server=http.createServer((req,resp)=>{
	let path='./views/';
	switch (req.url) {
		case '/':
			path=path+"index.html";
			break;

			case '/about':
				path=path+"about.html";
				break;
	
		default:
			path=path+"error.html";
			break;
	}

	fs.readFile(path,(err,data)=>{
		if (err) {
			resp.end(err);
		} else {
			resp.end(data);
		}
	})
})

server.listen(3000,()=>{
	console.log('Running.......');
})