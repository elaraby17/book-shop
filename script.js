const body=document.querySelector('body');
const btn=document.querySelector('.btn');
const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open');


openMenu.addEventListener('click',()=>{
    menu.classList.toggle('close');
})





btn.addEventListener('click',()=>{
    body.classList.toggle('dark');
})

