const fs=require('fs');

// fs.readFile('text.txt',(err,data)=>{
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data.toString());
// 	}
// })

// fs.writeFile('text1.txt','Hello Nihal',(err,data)=>{
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("File written");
// 	}
// })

// fs.appendFile("text.txt",'How Are You?',(err)=>{
// 	if (err) {
// 		console.log(err);
		
// 	} else {
// 		console.log("File Appended");
		
// 	}
// })

// fs.unlink('text.txt',(err)=>{
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("file Deleted");
		
// 	}
// })

fs.rmdir('./test',(err)=>{
	if (err) {
		console.log(err);
		
	} else {
		console.log('folder deleted');
		
	}
})

// fs.rmdir('./test',(err)=>{
// 	if (err) {
// 		console.log(err);
		
// 	} else {
// 		console.log('folder deleted');
		
// 	}
// })