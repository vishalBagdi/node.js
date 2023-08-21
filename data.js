const placeorder=(callback)=>{
    settimeout(()=>{
        console.log("order is now taken");
        callback();
    },200);
};
const addbread=(callback) =>{
    settimeout(()=>{
        console.log("bread");
        callback();
    },500);
};
const addtikki=(callback) =>{
   settimeout(()=>{
    console.log("tikki");
    callback();
   },1000);
};
const addsos=(callback) =>{
    settimeout(()=>{
        console.log("sos");
        callback();
    },1500);
};




console.log("Order is now going to take");
placeorder(() => {
    console.log('pass to add bread');
    addbread(() => {
        console.log('passing to tikki + bread');
        
            addtikki(() => {
                console.log('pass to sos ');
                addsos(() => {
                    console.log('bread+tikki+bread+sos+bread');
                })
            })
        })
    })
