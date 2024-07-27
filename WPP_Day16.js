function swap(array_num) {
    let temp = array_num[0];
    array_num[0] = array_num[array_num.length-1];
    array_num[array_num.length-1] = temp;
    
    return array_num;
 }
 
 console.log(swap([10,20,30,40]));