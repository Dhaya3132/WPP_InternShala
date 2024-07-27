function vowels_Count(str) {
    let count = 0;
    let s = str.split('');
    for(let i=0;i<s.length;i++){
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'o' || s[i] == 'u' || s[i] == 'i'){
            count+=1;
        }
    }
    return count;
 }
 
 console.log(vowels_Count("javascript"));