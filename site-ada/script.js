document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("name").value != "" && document.getElementById("email").value != "" && document.getElementById("numero").value != ""){
    alert("Prontinho, você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}