var container = document.querySelector("#container");
var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click",function()  {
        container.innerHTML= this.getAttribute("data-text");
    }
    )
});