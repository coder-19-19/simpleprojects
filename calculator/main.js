const mode = document.querySelector("#dark-mode")
const theme = document.querySelector("#theme")
const result = document.querySelector("#result")
const clear = document.querySelector("#clear")
let check

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

clear.addEventListener("click", () => {
    result.value = ""
})

const writeResult = number => {
    check = result.value[result.value.length-1]
    if(number == "*" || number == "/" || number == "+" || number == "-" || number == "." ){
        if( check != "*" && check != "+" && check != "-" && check != "/" && check != "."){
            result.value += number
        }
    }
    else{
        result.value += number
    }
}

const equal = () => {
    
    result.value != "" ? result.value = eval(result.value) : ""
}