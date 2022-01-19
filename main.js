var input = document.querySelector(".newTodo");
let span = document.getElementById("brojac");
let list = document.querySelector(".list");
let brojac = 0;
function addNewTodo(){
    
    let element = document.createElement("li");
    element.classList.add("todo");
    
    let div = document.createElement("div");
    element.appendChild(div);
    div.classList.add("check");

    let img = document.createElement("img");
    img.src = "./images/icon-check.svg";
    div.appendChild(img);
    img.classList.add("checkimg")

    const newContent = document.createTextNode(input.value);
    element.appendChild(newContent);

    let close = document.createElement("img");
    close.classList.add("close");
    close.src = "./images/icon-cross.svg";
    element.appendChild(close);

    list.appendChild(element);

    var close_btt = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close_btt.length; i++) {    
        close_btt[i].addEventListener("click",function() {
            this.parentElement.remove();
            span.innerHTML = brojac--;
            brojac = brojac-1
        });
    }
    var check_btt = document.getElementsByClassName("check");
    for(i = 0;i<check_btt.length;i++){
        check_btt[i].addEventListener("click",function(){
            var text = this.parentElement;
            this.style.background = "var(--Check_Background)";
            this.children[0].style.display = "block";
            text.style.textDecoration = 'line-through';
            text.style.color = 'var(--Very_Dark_Grayish_Blue)';
            text.classList.add("finshed");
        });
    }
    brojac++;
    span.innerHTML = brojac;
}
var finish = document.getElementsByClassName("finshed");
var com = document.querySelector(".completed");
var todo = document.getElementsByClassName("todo")
com.addEventListener("click",function(){
    for(let i=0;i<todo.length;i++){
        todo[i].style.display = "none";
    }
    for(let i=0;i<finish.length;i++){
        finish[i].style.display = "flex ";
    }
});
var all = document.getElementById("all");
all.addEventListener("click",function(){
    for(let i=0;i<todo.length;i++){
        todo[i].style.display = "flex";
    }
    for(let i=0;i<finish.length;i++){
        finish[i].style.display = "flex ";
    }
});
var active = document.getElementById("active")
active.addEventListener("click",function(){
    for(let i=0;i<todo.length;i++){
        todo[i].style.display = "flex";
    }
    for(let i=0;i<finish.length;i++){
        finish[i].style.display = "none ";
    }
});
$(".clear").click(function() {
    brojac-= finish.length;
    span.innerHTML = brojac;
    $( ".finshed" ).remove();
});
function newTodo(){
    if(input.value != ""){
        addNewTodo();
    }
    input.value = "";
}

input.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        newTodo();
    }
});

//Switch theme on app

let theme = document.querySelector(".theme");
let header = document.querySelector(".header");
let ind = false;
theme.addEventListener("click",function(){
    if(ind == true){
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        ind = false;
        theme.src ="./images/icon-sun.svg";
        header.style.background = "url(./images/bg-desktop-dark.jpg) no-repeat center center / cover"
    }
    else{
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        ind = true;
        theme.src ="./images/icon-moon.svg"
        header.style.background = "url(./images/bg-desktop-light.jpg) no-repeat center center / cover"

    }
});