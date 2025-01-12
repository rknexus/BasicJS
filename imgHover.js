let characters = document.querySelectorAll(".characters");
// let image = document.querySelector(".image");

// characters.addEventListener("mousemove", function(move){
//     image.style.left = move.x + "px";
//     image.style.top = move.y + "px";
// })
// characters.addEventListener("mouseenter", function(move){
//     image.style.opacity = 1;
// })
// characters.addEventListener("mouseleave", function(move){
//     image.style.opacity = 0;
// })

characters.forEach(function(image){

    image.addEventListener("mouseenter", function(){
        image.children[1].style.opacity = 1;
    })

    image.addEventListener("mouseleave", function(){
        image.children[1].style.opacity = 0;
    })

    image.addEventListener("mousemove", function(move){
        image.children[1].style.left = move.clientX + "px";
        image.children[1].style.top = move.clientY + "px";

    })
})