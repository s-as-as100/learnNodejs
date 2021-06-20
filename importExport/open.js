
// module how to export this module
const add = (a,b) => {
return a+b;
}
const sub = (a,b) => {
    return a-b;
    }
// every individual file in nodejs is called  module js

// every module has own private scope



const name = "mohd";



// module.exports = add;    //  for single

// module.exports.add = add;  
// module.exports.sub = sub;  
// 


// using object desruction


module.exports = {add, sub}