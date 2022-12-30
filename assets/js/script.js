let sliderElement = document.querySelector("#range")
let buttonElement = document.querySelector("#button")

let valueString = document.querySelector("#valor")
let passContainer = document.querySelector("#container-pass")
let passString = document.querySelector(".pass")
let tooltip = document.querySelector(".tooltip")
let newPassl = []

sliderElement.oninput = function() {
    valueString.innerHTML = this.value
}

function passGenerator(range) {            
    let charset = "abcdefghijklemnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ0123456789@!";
    let newPass = []
    let i = 1;
    
    for(i; i <= range; i++) {
        let randchar = charset[Math.floor(Math.random() * charset.length)]
        newPass.push(randchar)
    }
    a = newPass.join("")
    return a;
}

buttonElement.onclick = function() {
    buttonElementGlobalPass = passGenerator(sliderElement.value)
    passString.innerHTML = buttonElementGlobalPass
    passContainer.style.display = "block"
    tooltip.innerHTML = "Clique para copiar a senha"
    
}

passContainer.onclick = function() {
    navigator.clipboard.writeText(buttonElementGlobalPass)
    tooltip.innerHTML = "Senha copiada para area de transferencia!"
    
}
