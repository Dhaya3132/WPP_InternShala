function convertToBinary(num) {
    let binaryStr = num.toString(2);
    const paddedBinaryStr = binaryStr.padStart(8, '0');
    const reversed = paddedBinaryStr.split('').reverse().join('');
    return parseInt(reversed, 2);
}
const number = 17;
const binary = convertToBinary(number);
console.log(binary); 