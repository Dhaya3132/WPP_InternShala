function replace_with(str){
    let result = '';
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if (char >= 'a' && char <= 'z') {
            result += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
          } else if (char >= 'A' && char <= 'Z') {
            result += char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
          } else {
            result += char;
          }
    }
    return result;
}

console.log(replace_with('Hello'));