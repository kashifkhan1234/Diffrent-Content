const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e){
    const id = e.target.dataset.id;
    if (e){
btns.forEach(
    function(btn){
        btn.classList.remove("active");
     e.target.classList.add("active");
    }
);

articles.forEach( function (articles){
    articles.classList.remove("active");
});

const element = document.getElementById(id);
element.classList.add("active");
}
});