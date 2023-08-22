const main = document.querySelector('#main');
main.addEventListener('mouseenter',() => {
    main.classList.add('shadow-lg')
})

main.addEventListener('mouseleave',() => {
    main.classList.remove('shadow-lg')
})

const reviews = [{
    id : 1,
    name : 'Rahul',
    job : 'Web Developer',
    img : 'output-onlinejpgtools (1).jpg',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestias, consectetur praesentium quidem cumque eaque quaerat nobis asperiores exercitationem explicabo?'
},{
    id : 2,
    name : 'Aruthra',
    job : 'Hacker',
    img : 'output-onlinejpgtools (4).jpg',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsa ducimus cumque quam! Dolorum explicabo porro cupiditate rerum dolorem quidem suscipit!'
},
{
    id : 3,
    name : 'Mugesh',
    job : 'Editor',
    img : 'output-onlinejpgtools.jpg',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum accusamus sunt quod illum facere cumque dolores officiis cupiditate, in molestiae?'
},{
    id : 4,
    name : 'Anshad',
    job : 'Marketing',
    img : 'output-onlinejpgtools (2).jpg',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit quis voluptates eligendi natus minus ipsa odio alias excepturi eum.'
}]

const rbtn = document.querySelector('#rbtn')
const lbtn = document.querySelector('#lbtn')
const img = document.querySelector('#img')
const names = document.getElementById('name')
const job = document.getElementById('job')
const review = document.getElementById('review')

let currentItem = 0 ;

window.addEventListener('DOMContentLoaded',() =>{
    handleArrow(currentItem)
})

rbtn.addEventListener('click',() => {
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    handleArrow(currentItem)
})

lbtn.addEventListener('click',() => {
    currentItem--
    if(currentItem === -1){
        currentItem = reviews.length - 1
    }
    handleArrow(currentItem)
})

function handleArrow (e) {
    let item = reviews[e]
    img.src = item.img;
    names.textContent = item.name
    job.textContent = item.job
    review.textContent = item.review
}