let Numbers = Math.floor(Math.random() * 10 + 1);
// console.log(Numbers);
let Prompts = prompt('Enter A Number');
// console.log(typeof(Prompts));
if (Prompts == Numbers) {
    console.log('Matched');
}
else {
    console.log('Not Matched');
}