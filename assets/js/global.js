const inputValue = document.querySelectorAll("input")

for (let i = 0; i < inputValue.length; i++) {
    inputValue[i].addEventListener("keyup", (e) => {
        if (e.code == "Backspace") {
            inputValue[i - 1].focus()
        }
    })
}