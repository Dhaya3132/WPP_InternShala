const str = 'InternShala';
function substrings(str){
    const result = str.slice(str.length-3);
    return result+str+result
}
const response = substrings(str);
console.log(response);
