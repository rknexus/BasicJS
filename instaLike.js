let boo = document.getElementById("card");
let h1 = document.getElementById("h1");

boo.addEventListener("dblclick", function(){
    boo.style.opacity = 1;
    h1.style.opacity = 0;
    setTimeout(function(){
        boo.style.opacity = 0;
        h1.style.opacity = 1;
    },1000)
})