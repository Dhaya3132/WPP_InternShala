function array_max_diff(arr) {
    const result = [];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let dif = Math.abs(arr[i] - arr[j]);
            result.push(dif);
        }
    }
    return Math.max(...result)
}

// Example usage
console.log(array_max_diff([1, 2, 3, 18, 9])); 