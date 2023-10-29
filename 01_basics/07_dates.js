let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.getFullYear());
// console.log(myCreatedDate.getMonth());
// console.log(myCreatedDate.getDay());
// console.log(myCreatedDate.getHours());
// console.log(myCreatedDate.getMinutes());
// console.log(myCreatedDate.getSeconds());
// console.log(myCreatedDate.getMilliseconds());
// console.log(myCreatedDate.setFullYear(1985))
// console.log(myCreatedDate.setMonth(7));
// console.log(myCreatedDate.setDate(4))

// let myCreatedDate = new Date("01-13-2023")
let myCreatedDate = new Date("2023-01-21")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
})









