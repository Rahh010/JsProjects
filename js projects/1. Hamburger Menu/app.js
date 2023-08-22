const btnn = document.getElementById('btn')
const item = document.getElementById('item')
const main = document.getElementById('main')
const item1 = document.getElementById('item1')
const item2 = document.getElementById('item2')
const item3 = document.getElementById('item3')
let count = 0
btnn.addEventListener('click',() =>{
    // setTimeout(shownText, 500)
    main.classList.toggle('hover')
    setTimeout(shownText, 200)

    // count++ 
    // if(count%2 != 0){
    //     setTimeout(shownText, 500)
    // }else{
    //     item.classList.add('shown')
    //     main.classList.remove('hover')
    // } 
})

function shadow(x){
    x.classList.add('shadow-lg')
    
}

function normal(x){
    x.classList.remove('shadow-lg')
}

function shownText(){
    item.classList.toggle('shown') 
}

