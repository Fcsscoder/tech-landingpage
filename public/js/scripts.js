const myButton = document.querySelector("#btn-submit")
const myTitle = document.querySelector("#message-title")
const form = document.querySelector(".form-container")
const inputName = document.querySelector("#name")

function alterarTexto(nome){
    if(nome){
        const text = `Obrigado pela mensagem, ${nome}!`
        myTitle.textContent = (text)} else {
        const text = `Obrigado pela mensagem!`
        myTitle.textContent = (text)
    }
}

myButton.addEventListener("click", (e) => {
    e.preventDefault()

    const nome = inputName.value

    alterarTexto(nome)

    if(form){
    form.remove()
    }
})