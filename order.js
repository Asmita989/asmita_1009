var express=require ('express');
var app =express();


var customercontroller=function(){
var customer =[{customer:"Falak",location:"Indore",product:10},
{customer:"Falak",location:"Indore",product:10},
{customer:"Falak",location:"Indore",product:10}];
resp.send(customer);
}

app.get('/orders',customercontroller);

var server=app.listen(8000,function(){
var host =server.address().address
var port =server.address().port
console.log("Example app listening at http://localhost:8088", host, port)
)}