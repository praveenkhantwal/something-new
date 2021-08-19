const fake= ()=> {
return new Promise((resolve, reject)=>{
    const ran= Math.random();
    setTimeout(()=>{
        if (ran<0.8){
            resolve("good to go")

        }
        reject('stop right here');
    },2000)
})


}

fake("/fod/3")
.then ((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})