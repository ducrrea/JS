//Importa modulos necessários
const fs = require("fs");
const prompt = require("prompt-sync")();

function menu() {
    console.log("\nMenu de contatos: ");
    console.log("1. Adicionar contato");
    console.log("2. Listar contatos");
    console.log("3. Atualizar contato");
    console.log("4. Excluir contato");
    console.log("5. Sair");
}

function main(){
    do{
        menu();
        opcao = prompt("Escolha uma opção: ");
        switch(opcao){
            case "1":
                adicionar();
                break;
            case "2":
                listar();
                break;
            case "3":
                atualizar();
                break;
            case "4":
                excluir();
                break;
            case "5":
                console.log("Saindo....");
                break;
            default:
                console.log("Opção invalida. Tente novamente.");

        }
    } while (opcao !== "5");
}

//Função para ler os dados do arquivo Json

function lerDados(){
    const dados = fs.readFileSync
    ("contatos.json", "utf-8");
    return JSON.parse(dados || "[]");
    //Transforma o JSON em um array caso o JSON esteja vazio retorna um array vazio
}

function adicionar(){
    const nome = prompt("Digite o nome de contato: ");
    const telfone = prompt("Digite o telefone: ");

    const contatos = lerDados();
    contatos.push({nome, telfone});
    salvarDados(contatos);
    console.log("Contato adicionado com sucesso!");
}

function listar(){
    const contatos = lerDados();
    console.log("Contatos: ");
    contatos.forEach((contato, index) => {console.log(`${index + 1}. ${contato.nome} - ${contato.telfone}`);});
}

//função para atualizar um contato
function atualizar(){
    const indexAualizar = parseInt(prompt("Digite o numero do contato a ser atualizado: ")) -1;

    const contatos = lerDados();
    if (indexAualizar >=0 && indexAualizar < contatos.length){
        const novoNome = prompt("Digite o novo nome do contato: ");
        const novoTelefone = prompt("Digite o novo telefone do contato: ");

        contatos[indexAualizar] = {nome: novoNome, telfone: novoTelefone};
        salvarDados(contatos);
        console.log("Contato atualizado com sucesso!");
    } else{
        console.log("Indice invalido");
    }

}

//função para excluir um contato (DELETE)
function execluir(){
    const indexExcluir = paraInt(prompt("Digite o index do contato a ser excluído: ")) -1;

    const contatos = lerDados();
    if (indexExcluir >= 0 && indexExcluir < contatos.length){
        contatos.splice(indexExcluir, 1);
        salvarDados(contatos);
        console.log("contato excluído com sucesso");
    } else{
        console.log("Indice inválido");
    }
}

//função para salvar dados no arquivo JSON
function salvarDados(contatos){
    fs.writeFileSync("contatos.json", JSON.stringify(contatos, null, 2));
}

main();