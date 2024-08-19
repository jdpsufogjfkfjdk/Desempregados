function EnviarRespostas() {

    var contaDesempregado = new Object();

    contaDesempregado.nome = document.getElementById("nome").value;
    contaDesempregado.cpf = document.getElementById("cpf").value;
    contaDesempregado.endereco = document.getElementById("endereco").value;
    contaDesempregado.email = document.getElementById("email").value;
    contaDesempregado.escolaridade = document.getElementById("escolaridade").value;
    contaDesempregado.titulo = document.getElementById("titulo").value;
    contaDesempregado.empresa = document.getElementById("empresa").value;
    contaDesempregado.tipo = document.getElementById("tipo").value;
    contaDesempregado.descricao = document.getElementById("descricao").value;

    var json = JSON.stringify(contaDesempregado)

    console.log(json);
    console.log(contaDesempregado.valueOf());

}

var formulario = document.querySelector("form")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    EnviarRespostas()
})
