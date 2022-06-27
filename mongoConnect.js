const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017';
const client=new MongoClient(url);

const dbconnection=async ()=>{
    await client.connect();
    const db=client.db('student');
    const collection=db.collection('cse');
    return collection; 
}
module.exports=dbconnection;
// dbconnection().then((collection)=>{
//     console.log('Successfull');
// }).catch((err)=>{
//     console.log(err)
// })