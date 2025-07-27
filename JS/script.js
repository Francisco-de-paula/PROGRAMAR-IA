document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {

    if(
        document.getElementById("nome").value != "" &&  
        document.getElementById("email").value != "" &&  
        document.getElementById("numero").value != ""
    ) {
        alert("Pronto! Você receberá as novidades Bafônicas por e-mail !")
    } else{
        alert("Por favor, preencha os dados corretamente!")
    }
}
