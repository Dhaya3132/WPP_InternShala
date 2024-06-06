const str = 'INTernshala';
let n = str.length;
function lowerupper(str, n) {
    if (n == 3) {
        return str.toUpperCase();
    }
    else {
        return str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();
    }
}

const result = lowerupper(str, n);
console.log(result);