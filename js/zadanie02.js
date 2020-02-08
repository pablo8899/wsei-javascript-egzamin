//Zadanie 2

function concatArray(array1,array2)
{
    var retArray = [];
    array1.forEach(element => {
        retArray.push(element);
    });

    array2.forEach(element => {
        retArray.push(element);
    });

    return retArray;
}

console.log(concatArray([1,3],[3,5]));