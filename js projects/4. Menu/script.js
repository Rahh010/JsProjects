const menu = [
    {
        id : 1,
        img : "./images/img1.jpg.jpg",
        name : "Chappati",
        rate : "$50",
        catergory : "Dinner",
        ref : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure corrupti nostrum dicta non. Officiis itaque, temporibus illum nobis consequatur corrupti nihil odit maxime voluptates, illo quae adipisci! Voluptate, cumque.",
    },
    {
        id : 2,
        img : "./images/img2.jpg.jpg",
        name : "Parotta",
        rate : "$60",
        catergory : "Lunch",
        ref : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ea laboriosam esse, iusto expedita provident velit voluptatibus delectus at, neque earum exercitationem laborum eligendi voluptas quod vitae beatae. Nisi, quis nesciunt?",
    },
    {
        id : 3,
        img : "./images/img3.jpg.jpg",
        name : "Salad",
        rate : "$75",
        catergory : "Breakfast",
        ref : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut nulla reiciendis! Perferendis cumque quam beatae sequi excepturi, quod possimus necessitatibus laboriosam rem id veniam animi ullam unde.",
    },
    {
        id : 4,
        img : "./images/img4.jpg.jpg",
        name : "Cup Cake",
         rate : "$74",
        catergory : "Breakfast",
        ref : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione harum beatae vero, earum commodi dolor cumque numquam molestias veritatis dolorum ducimus quia veniam temporibus placeat quo voluptatem. Impedit autem unde corporis nobis consequuntur!",
    },
    {
        id : 5,
        img : "./images/img5.jpg.jpg",
        name : "Shake",
        rate : "$66",
        catergory : "Breakfast",
        ref : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates obcaecati, ipsam qui nobis natus voluptate incidunt distinctio iste suscipit, aut similique corrupti, provident velit perferendis ipsa voluptas sunt. Nam doloribus dolores suscipit obcaecati, sapiente odit nostrum earum nemo, velit accusamus ut fugit quam.",
    },
    {
        id : 6,
        img : "./images/img6.jpg.jpg",
        name : "Pan Cake",
        rate : "$100",
        catergory : "Breakfast",
        ref : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa odio autem sed eius nam iusto at, fuga alias, temporibus nisi deserunt inventore ipsam doloremque dolorum labore voluptates beatae recusandae adipisci optio animi. Rerum unde obcaecati accusamus dolores architecto excepturi fugiat adipisci officiis, eum repellendus saepe voluptatibus assumenda repudiandae harum laudantium.",
    },
    {
        id : 7,
        img : "./images/img7.jpg.jpg",
        name : "Naan",
        rate : "$98",
        catergory : "Dinner",
        ref : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, temporibus vero. Debitis consectetur incidunt fugiat quidem quos nostrum velit corrupti sapiente voluptatem.",
    },
]

const main = document.querySelector('#main')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn1 = document.querySelector('#btn1')


menu.forEach((item) => {
    htmlContent(item)
})

btn2.addEventListener('click',() => {
    main.innerHTML = ''
    let obj = menu.filter((item) => {
        return item.catergory === 'Breakfast'
    })
    obj.forEach((item) => {
        htmlContent(item)
    })
})

btn3.addEventListener('click',() => {
    main.innerHTML = ''
    let obj = menu.filter((item) => {
        return item.catergory === 'Lunch'
    })
    obj.forEach((item) => {
        htmlContent(item)
    })
})

btn4.addEventListener('click',() => {
    main.innerHTML = ''
    let obj = menu.filter((item) => {
        return item.catergory === 'Dinner'
    })
    obj.forEach((item) => {
        htmlContent(item)
    })
})

btn1.addEventListener('click',() => {
    main.innerHTML = ''
    menu.forEach((item) => {
        htmlContent(item)
    })
})


function htmlContent(item) {
    main.innerHTML += `
    <!-- menu  -->
            <div class="col-lg-5 m-1 shadow-lg" id="menuItem">
                <div class="main">
                    <div class="d-flex">
                        <div>
                            <img src="${item.img}" class="rounded m-3" id="img" alt="Item Image">
                        </div>
                        <div class="m-3">
                            <h4 class="head">
                                ${item.name}
                            </h4>
                            <p>
                                ${item.rate}
                            </p>
                            <div className="type">
                                <h6>${item.catergory}</h6>
                            </div>
                        </div> 
                    </div>
                    <hr>
                    <h6 class="itemName m-3">
                        ${item.ref}
                    </h6>
                </div>
            </div>
            <!-- end of menu  -->
    `
}

