let cursor1 = document.getElementById("cursor1");
let body = document.body;

body.addEventListener("mousemove", function(move){
    cursor1.style.left = move.x - 10 + "px";
    cursor1.style.top = move.y -10 + "px";
})