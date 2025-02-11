let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove(bx-x);
    navbar.classList.toggle('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer','Web Designer', 'Graphic Designer'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1200,
    loop: true,
  });