const express=require('express');
const app=express();
app.get('/',(req,resp)=>{
    resp.send('<h2>New Project File</h2><p>Express js Record</p>')
});
app.get('/about',(req,resp)=>{
    resp.send('<h2>About Page File</h2><p>Express js Record</p>')
});
app.get('/product',(req,resp)=>{
    resp.send('<h2>New Product File</h2><p>Express js Record</p>')
})
app.listen(3002);

// ============Applying Middleware===============
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('<h2>Please Provide age</h2>')
    }
    else{
        next();
    }
    console.log("Middleware applied");
}
app.get('/user',reqFilter,(req,resp)=>{
    resp.send(`<h2>New Product File</h2><p>User age ${req.query.age}</p>`)

})

// ========Applying Middleware on some Routes===========
const route=express.Router();
route.use(reqFilter);
route.get('/admin',(req,resp)=>{
    resp.send('Middleware on Some Route');
})
route.get('/author',(req,resp)=>{
    resp.send(`<h2>Author File</h2><p>User age ${req.query.age}</p>`)
})
app.use(route);