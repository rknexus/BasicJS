let condition = document.getElementById("friends?");
let card = document.getElementById("card");
let toggle = 0;

condition.addEventListener("click", function(){

    if(toggle == 1){
        condition.textContent = "Add friends";
        condition.style.backgroundColor = "#F7EABE";
        condition.style.color = "green";
        toggle = 0;
    }
    else{
        condition.textContent = "Remove friends";
        condition.style.backgroundColor = "#F29471";
        condition.style.color = "white";
        toggle = 1;
    }

})