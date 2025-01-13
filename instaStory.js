const resources = [
  // Ayase, Momo
  {
    pp: "https://i.pinimg.com/originals/fc/d0/62/fcd0624b52f972c19c124416a0c2dbbe.jpg",
    story: "https://cdn.donmai.us/sample/7e/83/__ayase_momo_dandadan_drawn_by_mon_monmonlezard__sample-7e83b1b03d43de7bf3c60dd26be20593.jpg",
  },

  // Kano, Chinatsu
  { pp: "https://i.pinimg.com/736x/40/3e/ae/403eae8bdd6ee3541363705286dc2e7a.jpg",
    story: "https://i.pinimg.com/736x/66/f1/b6/66f1b65d74427e7822e22b943d66740a.jpg" },

  // Yuki , Xue
  { pp: "https://i.pinimg.com/736x/f8/0c/2e/f80c2e6d6655c42125fd0903bf6ba3b3.jpg",
    story: "https://i.pinimg.com/736x/3e/9d/86/3e9d86086463b6a88fd1219e9067e29a.jpg" },

  // Chono, Hina
  { pp: "https://i.pinimg.com/736x/4e/37/66/4e37665eb89dc8826e922667ff55b531.jpg", 
    story: "https://i.pinimg.com/736x/fd/ce/a6/fdcea69fc178d2ecc0ee706690784e95.jpg" },

  // Shiratori, Aira
  { pp: "https://i.pinimg.com/736x/15/34/c0/1534c0e72c919fde1c9f444643837e6b.jpg", 
    story: "https://i.pinimg.com/736x/55/26/7e/55267e9352b27e77e298f8fb2c4c6e1e.jpg" },
];

let stories = document.getElementsByClassName("stories")[0];
let elements = "";

resources.forEach(function (story, index) {
  elements += `<div class="story">
                    <img class="${index}" src="${story.pp}" alt="">
                 </div>`;
});

stories.innerHTML = elements;
stories.addEventListener("click", function (dets) {
  console.log(resources[dets.target.className].story);
  document.getElementsByClassName("fullScreen")[0].style.display = "block";
  document.getElementsByClassName("fullScreen")[0].style.backgroundImage = `url(${resources[dets.target.className].story})`;

  setTimeout(function () {
    document.getElementsByClassName("fullScreen")[0].style.display = "none";
  }, 500);
});
