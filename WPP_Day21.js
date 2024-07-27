function removeDuplicateChars(str) {
    const charCount = {};
    for (const num of str) {
        if (charCount[num] !== undefined) {
            charCount[num] += 1;
        }
        else {
            charCount[num] = 1;
        }
    }
    return str.split('').filter(char => charCount[char] == 1).join('');
}

const input = "abcdabc";
const result = removeDuplicateChars(input);
console.log(result);

