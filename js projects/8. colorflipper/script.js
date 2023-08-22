const BG = document.getElementById("button")
const Text = document.getElementById("HexVal")
const btn = document.getElementById("Btn")
let Hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let Var,Hexaa


btn.addEventListener("click",Change)
function Change(){
    let Hexacolor = '#'
    for(i=1;i<=6;i++){
       Hexacolor += Work()
    }
    Text.innerHTML = Hexacolor
    BG.style.backgroundColor = Hexacolor

}

function Work(){
    Var = Math.floor(Math.random()*16)
    return Hexa[Var]
}

