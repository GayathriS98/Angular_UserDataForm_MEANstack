const express=require('express');
const app=express();
var cors=require('cors');
var bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
let arr=[];
app.use(cors());

app.get('/userDetails',function(req,res){
    res.json(arr);
})

app.post('/userdetails',function(req,res){
    
    arr.push(req.body);
    res.json(req.body);
    console.log(req.body);
})
app.listen(2000);