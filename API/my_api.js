const prompt = require("prompt-sync")();

function consultaRickMorty(){
    let id = prompt("Digite o ID do personagem: ");
    id = id.trim();

    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
        .then((resposta) => {
            return resposta.json();
        })
        .then((dados) => {
            if(dados.erro) {
                console.log("Personagem não encontrado");
                return;
            }

            console.log("Dados do personagem: ")
            console.log("ID: ", dados.id);
            console.log("Nome: ", dados.name);
            console.log("Status: ", dados.status);
            console.log("Espécie: ", dados.species);
            console.log("Gênero: ", dados.gender);
        })
        .catch((erro) => {
            console.log("erro ao acessar a API");
            console.log(erro.message);
        })
}
consultaRickMorty();