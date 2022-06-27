const express=require('express');
const dbConnection=require('./mongoConnect');
const app=express();
app.use(express.json());

app.get('/',async(req,resp)=>{
    const db=await dbConnection();
    // const result=await db.findOne();
    const result=await db.find().limit(1).sort({$natural:-1}).toArray();
    resp.send(result);
});
app.post('/',async(req,resp)=>{
    const db=await dbConnection();
    // const data={name:'POST',roll:185594,fee:'Fully',mark:"56"};
    const data=req.body;
    const result=await db.insertOne(data);
    resp.send(result);
});
app.put('/:roll',async(req,resp)=>{
    const db=await dbConnection();
    const data=parseInt(req.params.roll);
    console.log(typeof(data));
    const result=await db.updateOne({roll:data},{$set:{name:"UPDATE1"}});
    // const result=await db.updateOne(data,{$set:{name:"UPDATE"}});
    resp.send(result);
});
app.delete('/:roll',async(req,resp)=>{
    const db=await dbConnection();
    const data=parseInt(req.params.roll);
    const result=await db.deleteOne({roll:data});
    resp.send(result);
});


app.listen(4000);