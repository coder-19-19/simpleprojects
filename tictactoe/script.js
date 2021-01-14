
const mode = document.querySelector("#dark-mode")
const theme = document.querySelector("#theme")
const sound = new Audio("music/touch.mpeg")
const volume = document.querySelector("#volume")
const win = document.querySelector(".win")
let buttonText = "X"
let checkVolume  = true
let score1 = 0
let score2 = 0
let buttonNum = 0
mode.addEventListener("click",() => {
    if(theme.getAttribute("href") == "light.css"){
        theme.href = "dark.css"
        mode.textContent = "Light Mode 🌙"
    }
    else{
        theme.href = "light.css"
        mode.textContent = "Dark Mode 🌙"
    }
})


volume.addEventListener("click", () =>{
    if(volume.className == "fa fa-volume-up"){
        volume.className = "fa fa-volume-down"
        checkVolume = false
    }
    else{
        volume.className = "fa fa-volume-up"
        checkVolume = true    
    }

})



const drawButton = (id) => {
    if(document.querySelector("#button" + id).value == "A"){
        document.querySelector("#button" + id).value = buttonText
        document.querySelector("#button" + id).style.color = "black"
        document.querySelector("#button" + id).setAttribute("disabled",false)
        document.querySelector("#button" + id).addEventListener("onmouseover", () => {
        document.querySelector("#button" + id).style.color = "white"

        })
    }
    buttonText == "X" ? buttonText = "O" : buttonText = "X"
    if(checkVolume){
        sound.play()
    }
}

const checkScore = (id) => {
    buttonNum++
    if(buttonNum == 9){
        for(let i = 1; i <=9; i++){
            resetButton(document.querySelector("#button" + i))
        }
    }
    win.style.display = "none"
    checkWin(1,2,3)
    checkWin(4,5,6)
    checkWin(7,8,9)
    checkWin(1,4,7)
    checkWin(2,5,8)
    checkWin(3,6,9)
    checkWin(1,5,9)
    checkWin(3,5,7)

}

const checkWin = (button1,button2,button3) => {
    if(button(button1) == button(button2) && button(button2) == button(button3)){
        if(button(button1) == "X"){
            score1++
            document.querySelector("#player1").textContent = "Player1 : " + score1
            win.style.display = "block"
            win.textContent = "Player1 Win"
            for(let i = 1; i <= 9; i++) {
                resetButton(document.querySelector("#button" + i))
            }
        }
        else if(button(button1) == "O"){
            score2++
            document.querySelector("#player2").textContent = "Player2 : " + score2
            win.style.display = "block"
            win.textContent = "Player2 Win"
            for(let i = 1; i <= 9; i++) {
                resetButton(document.querySelector("#button" + i))
            }
        }
    }
}


const button = (id) => {
    let name = document.querySelector("#button" + id).value
    return name
}

const resetButton = (name) => {
    name.removeAttribute("disabled")
    buttonNum = 0
    name.value = "A"
    name.style.color = "transparent"
    name.style.transform = "rotate(720deg)"
}
