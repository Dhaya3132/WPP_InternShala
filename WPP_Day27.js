function filteredArray(originalArray, valuesToRemove){
    const filtervalue = originalArray.filter((value) => !valuesToRemove.includes(value));
    originalArray.length = 0;
    console.log([...filtervalue]);
}

const originalArray = [1, 2, 3, 4, 5, 6];
const valuesToRemove = [2, 4, 6];
filteredArray(originalArray, valuesToRemove);