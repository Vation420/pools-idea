

//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


//Zmiana koloru header
document.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 0)
    {
        header.classList.add("scrolled");
    }else
    {
        header.classList.remove("scrolled");
    }
});




//home4 podmiana diva
var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");
var diva = document.getElementById("diva");
var divb= document.getElementById("divb");
var divc= document.getElementById("divc");
bt1.addEventListener('click', ()=>{
    diva.style.display='flex';
    divb.style.display='none';
    divc.style.display='none';

    bt1.style.border='3px solid rgb(0, 132, 255)';
    bt2.style.border='none';
    bt3.style.border='none';
});
bt2.addEventListener('click', ()=>{
    diva.style.display='none';
    divb.style.display='flex';
    divc.style.display='none';

    bt1.style.border='none';
    bt2.style.border='3px solid rgb(0, 132, 255)';
    bt3.style.border='none';
});
bt3.addEventListener('click', ()=>{
    diva.style.display='none';
    divb.style.display='none';
    divc.style.display='flex';

    bt1.style.border='none';
    bt2.style.border='none';
    bt3.style.border='3px solid rgb(0, 132, 255)';
});