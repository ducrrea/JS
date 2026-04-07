const prompt = require("prompt-sync")();

async function consultaCEP(){
    try{
    let cep = prompt("Digite o CEP (somente numeros): ");
    cep = cep.trim();

    const url = `http://viacep.com.br/ws/${cep}/json`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if(dados.erro) {
        console.log("CEP não encontrado");
        return;
    }

    console.log("Dados do CEP: ")
    console.log("CEP: ", dados.cep);
    console.log("Logradouro: ", dados.logradouro);
    console.log("Bairro: ", dados.bairro);
    console.log("Cidade: ", dados.localidade);
    console.log("UF: ", dados.uf);
    } catch (erro) {
            console.log("erro ao acessar a API");
            console.log(erro.message);
        }
}
consultaCEP();
