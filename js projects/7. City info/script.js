const button = document.querySelector("button")
button.addEventListener("click",display)
let resdiv = document.createElement("div")
resdiv.id = 'result'
document.getElementById('box').appendChild(resdiv)
function display(){
    
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    
    let  captain = 0, starplayer = 0

    switch (city) {
        case 'Bangalore':
            captain = "Virat kohli"
            starplayer = "Faf"
            break;
        case 'Chennai':
            captain = "Dhoni"
            starplayer = "Jadeja"
            break;
        case 'Mumbai':
            captain = "Rohit S"  
            starplayer = "C.Green" 
            break;
        case 'Delhi':
            captain = "A.Markram"   
            starplayer = "Klaasen"  
            break;

        default:
            break;
    }

    let text = `The captain of the ${city} is ${captain} and the star players are ${starplayer}`
    console.log(text)

   

    document.getElementById("result").innerHTML = text
}