const mysql= require('mysql');
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})
conn.connect((err)=>{
    if(err) throw err;
    else console.log('connected');
})
const FindData=()=>{
    const result=conn.query('select * from student',(err,resp)=>{
        console.log(resp)
    });
}
const CreateData=()=>{
    // const result=conn.query('INSERT INTO student(name,roll,branch) VALUE ("vishal",18550,"cse")',(err,resp)=>{
    //     console.log(resp);
    // })
    const result2=conn.query('INSERT INTO student SET ?',{name:"Amit",roll:18549,branch:"cse"},(err,resp)=>{
        console.log(resp)
    })
}
const UpdateData=()=>{
    // const result=conn.query('UPDATE student SET name="Vishal Maurya" WHERE id=1',(err,resp)=>{
    //     console.log(resp)
    // })
    const data=['Amit Soni',"CSE",4];
    const result=conn.query('UPDATE student SET name=?,branch=? WHERE id=?',data,(err,resp)=>{
        console.log(resp)
    })
}
const DeleteData=()=>{
    const result=conn.query('DELETE FROM student WHERE id=2',(err,resp)=>{
        console.log(resp)
    })
}
FindData()