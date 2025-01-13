let characters = document.querySelectorAll(".characters");

characters.forEach(function (image) {
  image.addEventListener("mouseenter", function () {
    image.children[1].style.opacity = 1;
    image.children[1].style.height = "150px";
    image.children[1].style.width = "150px";
  });

  image.addEventListener("mouseleave", function () {
    image.children[1].style.opacity = 0;
  });

  image.addEventListener("mousemove", function (move) {
    const rect = image.getBoundingClientRect();
    image.children[1].style.left = move.clientX - rect.left + "px";
    image.children[1].style.top = move.clientY - rect.top + "px";
  });
});
