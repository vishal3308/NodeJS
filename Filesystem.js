const app=require('./app');
const fs=require('fs');
const path=require('path');
const { json } = require('stream/consumers');
let fullpath=path.join(__dirname,'file');
console.log(app());
fs.readdir(fullpath,(err,files)=>{
    console.log(files);
    fullpath=path.join(fullpath,'vishal.txt')
    fs.readFile(fullpath,'utf-8',(err,text)=>{
        console.log(text);
        
    })
})


