const btn = document.getElementById("hamburger");
btn.addEventListener("click", () => {
    const links = document.getElementById('links');
    links.classList.add("linksnav");
    links.classList.remove("links");
    btn.classList.add("remove")
    const btnb = document.getElementById("hamburgerb");
    btnb.classList.add("show")
    btnb.classList.remove("hamburgerb")
    btnb.classList.remove("remove")
})

const btnb = document.getElementById("hamburgerb");
btnb.addEventListener("click", () => {
    const links = document.getElementById('links');
    links.classList.add("links");
    links.classList.remove("linksnav");


    btnb.classList.add("remove")
    const btna = document.getElementById("hamburger");
    btna.classList.add("hamburger")
    btna.classList.remove("remove")
})