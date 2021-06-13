let evt = document.querySelector(".art-btn")
evt.addEventListener("click", f);
function f(e){
    e.currentTarget.previousElementSibling.classList.toggle("show");
}