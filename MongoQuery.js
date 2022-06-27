const dbConnection=require('./mongoConnect');
const Finddata=async ()=>{
    const db=await dbConnection();
    const result=await db.find().limit(1).sort({$natural:-1}).toArray();
    console.log(result);
}

const CreateData=async ()=>{
    const db=await dbConnection();
    const result=await db.insertOne({name:"MongoDb",roll:185595,fee:'FULLY PAID'});
    console.log(result);
}

const UpdateData=async()=>{
    const db=await dbConnection();
    const result=await db.updateOne({roll:185595},{$set:{name:"MONGO"}});
    console.log(result);
}
const DeleteData=async()=>{
    const db=await dbConnection();
    const result=await db.deleteOne({roll:185595});
    console.log(result);
}
// DeleteData();
// CreateData()
Finddata();