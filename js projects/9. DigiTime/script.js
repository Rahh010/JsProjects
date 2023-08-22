
let hour = document.getElementById("hour")
let minutes = document.getElementById("min")
let seconds = document.getElementById("sec")

function fn() {
    let Time = new Date()
    let hr = Time.getHours()
    let min = Time.getMinutes()
    let sec = Time.getSeconds()

    
    if(hr>12){
        hr = hr - 12
    }

    hour.innerHTML = set0(hr)
    minutes.innerHTML = set0(min)
    seconds.innerHTML = set0(sec)

}


function set0(a) {
    return a =a<10?"0"+a:a
}






setInterval(fn,500)

