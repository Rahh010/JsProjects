const btn = document.getElementById('btn')
const main = document.getElementById('main')
const remove = document.getElementById('remove')

window.addEventListener('DOMContentLoaded',() => {
   main.style.left = '-200px'
})

btn.addEventListener('click',() => {
   main.style.left = '0'
   main.classList.add('expand');
})

remove.addEventListener('click',()=> {
   main.style.left = '-200px'
   main.classList.remove('expand');
})