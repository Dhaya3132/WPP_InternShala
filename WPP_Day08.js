const str = 'Javascript';
const substr = 'Java';
function checking(str){
    let front = str.slice(0,4);
    if(front == substr){
        return 'Same';
    }
    else{
        return 'Not Same';
    }
}

const result = checking(str);
console.log(result);