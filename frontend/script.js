const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', ( ) => {
        nav.classList.add('active');
    })
}
if (bar) {
    close .addEventListener('click', ( ) => {
        nav.classList.remove('active');
    })
}

const wrapper =  document.querySelector('.wrapper');
const loginLink =  document.querySelector('.login-link');
const registerLink =  document.querySelector('.register-link');
const btnPopup =  document.querySelector('.btnLogin-popup');
const iconClose =  document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})