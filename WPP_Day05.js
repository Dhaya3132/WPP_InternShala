function stringsslicing(arr,index)
{
    const part1 = arr.slice(0,7);
    const part2 = arr.slice(index+1);
    console.log(part1+part2);
}
stringsslicing("Hello World",7);