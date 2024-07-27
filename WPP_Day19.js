const array_element_mode = (arr) => {
    const map = {};
    for(let num of arr){
        if(map[num]!==undefined){
            map[num] +=1;
        }
        else{
            map[num] = 1;
        }
    }
    let maxCount = 0;
    let node = null;
    for(const nums of arr){
        if(map[nums] > maxCount){
            maxCount = map[nums];
            node = nums;
        }
    }
    return node;
};
console.log(array_element_mode([1, 2, 3,3,3,3, 2, 2, 8, 1, 9]));  
