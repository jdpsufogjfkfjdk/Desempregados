function EnviarRespostas() {

    var contaDesempregado = new Object();

    contaDesempregado.nome = document.getElementById("nome").value;
    contaDesempregado.cpf = document.getElementById("cpf").value;
    contaDesempregado.endereco = document.getElementById("endereco").value;
    contaDesempregado.e-mail = document.getElementById("e-mail").value;
    contaDesempregado.escolaridade = document.getElementById("escolaridade").value;
    contaDesempregado.titulo = document.getElementById("titulo").value;
    contaDesempregado.empresa = document.getElementById("empresa").value;
    contaDesempregado.tipo = document.getElementById("tipo").value;
    contaDesempregado.descricao = document.getElementById("descricao").value;





    const contaDesempregado = {
        "nome": nome,
        "cpf": cpf,
        "endereco": endereco,
        "e-mail": e-mail,
        "escolaridade": escolaridade,
        "titulo": titulo,
        "empresa": empresa,
        "tipo": tipo,
        "descricao": descricao

    };


    console.log(JSON.stringify(contaDesempregado, null, 2));



    


}