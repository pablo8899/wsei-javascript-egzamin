//1
var sampleClass = document.querySelectorAll(".sample_class");

function getTagsOfElements(elements)
{
    retArray = [];
    elements.forEach(element => {
        retArray.push(element.tagName);
    });

    return retArray;
}

console.log(getTagsOfElements(sampleClass));

//2

var id = document.querySelector("#sample_id");

function getClassesOfElement(element)
{
    retArray = Array.from(element.classList);

    return retArray;
}

console.log(getClassesOfElement(id));

//3
var sampleClass2Li = document.querySelectorAll(".sample_class_2 li");

function getInnerTextsOfElements(elements)
{
    retArray = [];
    elements.forEach(element => {
        retArray.push(element.innerText);
    });

    return retArray;
}

console.log(getInnerTextsOfElements(sampleClass2Li));
//4
var a = document.querySelectorAll("a");

function getAddressesOfElements(elements)
{
    retArray = [];
    elements.forEach(element => {
        retArray.push(element.getAttribute("href"));
    });

    return retArray;
}

console.log(getAddressesOfElements(a));

//5 
var sampleClass3 = document.querySelector(".sample_class_3");


console.log(getTagsOfElements(Array.from(sampleClass3.children)));