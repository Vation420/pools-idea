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

sr.reveal('.home2text',{delay:220, origin:'left'});
sr.reveal('.services1',{delay:260, origin:'right'});
sr.reveal('.services2',{delay:300, origin:'right'});
sr.reveal('.services3',{delay:340, origin:'right'});
sr.reveal('.services4',{delay:380, origin:'right'});
sr.reveal('#pi',{delay:400, origin:'left'});
