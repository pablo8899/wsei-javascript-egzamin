//Zadanie 3

function bigestSumOfTwoElements(array)
{
    if(array.length == 0)
    {
        return false;
    } else if(array.length == 1) {
        return array[0];
    } else {
        var f = Math.max.apply(null,array);
        array.splice(array.indexOf(f), 1);
        var t = Math.max.apply(null,array);
        return t + f;
    }
}

console.log(bigestSumOfTwoElements([1,2,3,4])); 
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));