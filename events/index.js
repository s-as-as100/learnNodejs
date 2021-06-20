// Events Module
// nodejs has a built-in module, called "events",

// where you can create-, fire -, and listen for- your own events

// example-1 Registering for the event to be fired 
// only one time using once

// example-2 create an event emitter instance 
// and register a couple of callbacks


//example 3- registering for the event with callback paramters

// Events -- > module

// class --> create
const EventEmiiter = require('events') 

const event = new EventEmiiter();

// listen  using on what you do  ?
// event.on("sayMyName" , () => {
//     console.log("your name is mohd")
// })

// emit or trigger 
// event.emit("sayMyName");   // event -->sayMyName

// the concept is quite simple: emitter objects emit named events
// cause previosuly registered listeners to be called .So 
// an emitter object basically has two features.

// emitting name events
// registering and unregistering listener functions .

// 
// usig nodejs u can called multiple events on the one event name ;

/// example 2
// event.on("sayMyName" , () => {
//     console.log("your name is hd")
// })

// event.on("sayMyName" , () => {
//     console.log("your name is mo")
// })
// event.on("sayMyName" , () => {
//     console.log("your name is moh")
// })
// event.on("sayMyName" , () => {
//     console.log("your name is md")
// })

// event.emit("sayMyName"); 



// example 3

event.on("checkpage", (sc,msg) => {
console.log(`status code is ${sc}  and thr page is${msg}`)
})   // function define



event.emit("checkpage", 200 ,"okay")   // function call


















