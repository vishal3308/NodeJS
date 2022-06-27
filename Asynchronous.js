let [a,b]=[10,5];
console.log("Starting....");
const middle=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(2);
    }, 2000);
})
middle.then((result)=>{
    console.log('Promise ',a+result)
})

const intermediate=async ()=>{
     setTimeout(() => {
        b= 20;
    }, 2000);
}
intermediate().then(()=>{
    console.log("Async ",a+b);
});