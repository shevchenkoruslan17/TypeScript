
function sortNums(array:number[],direction:string):number[] | undefined{
    if (direction === 'ascending') return array.sort((a, b) => a - b);
    if (direction === 'descending') return array.sort((a, b) => b - a);
}
return array;

function sortNum(array:number[],direction:string):number[] | undefined {
    const sort = array.sort((a, b) => a - b);
    if( derection === 'ascending'){
        return sort;
    }
    if ( direction === 'descending'){
        return sort.reverse();
    }
}
