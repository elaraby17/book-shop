const body=document.querySelector('body');
const btn=document.querySelector('.btn');
const menu=document.querySelector('.menu');
btn.addEventListener('click',()=>{
    body.classList.toggle('dark');
})