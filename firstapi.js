const http=require('http');
console.log("User ",process.argv);
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application/json'});
    resp.write(JSON.stringify({name:'VISHAL',roll:185550,college:'VBSPU'}));
    resp.end();
}).listen(3001);