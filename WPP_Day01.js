const obj = new Date();
const day = obj.getDay();
const DayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//getting hours 
let hours = obj.getHours();
let min = obj.getMinutes();
let sec = obj.getSeconds();

//AM PM
let AMPM = hours >= 12 ? 'AM' : 'PM';

//12 HOURS FORMAT
hours = hours > 12 ? hours - 12 : hours;

//LITERALS
const formatted = `${hours < 10 ? '0'+ hours : hours} ${AMPM}: ${min<10 ? '0'+min : min} : ${sec<10 ? '0'+sec : sec}`;

console.log('Today is', DayArray[day]);
console.log(formatted);