

var http=require("http");
var hostName='127.0.0.1';
var port=8080;

var server=http.createServer(function(req,res){
	res.setHeader('Content-Type','text/plain');
	    res.setHeader('Access-Control-Allow-Origin',"*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
	res.end("hello nodejs");
})
server.listen(port,hostName,function(){
	console.log('服务器运行在http://${hostName}:${port}');

});