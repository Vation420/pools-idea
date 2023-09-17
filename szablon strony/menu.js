let menu = document.querySelector('#micons');
let nav = document.querySelector('.nav');

menu.onclick = () => 
{
    menu.classList.toggle('#micos');
    nav.classList.toggle('open');
};

const sr = ScrollReveal
({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hometext',{delay:200, origin:'top'});
sr.reveal('.home-img',{delay:450, origin:'top'});
sr.reveal('.logo',{delay:500, origin:'left'});
