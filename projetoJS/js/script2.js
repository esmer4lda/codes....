
let nomes = [];


function adicionar() {

    let nome = document.getElementById("nome").value;
    nomes.push(nome);
    alert("Nome adicionado com sucesso! " + nome);

}

function procurar() {
let nome = document.getElementById("nome").value;
if (nomes.includes(nome)) {
    alert("O nome está na lista!");
} else {
    alert("O nome não está na lista!"); 

}
}

function tamanho() {

    alert("O tamanho do array é: " + nomes.length);


}
function remoçao() {
    nomes.pop();
    alert("O último nome foi removido com sucesso!");
    nomes.unshift();
    alert("O primeiro nome foi adicionado com sucesso!");
}

function verificaçao() {
    let nome = document.getElementById("nome").value;
    if (nomes.includes(nome)) {
        alert("O nome está na lista!");
    } else {
        alert("O nome não está na lista!");
    }
}

function exibir() {

    alert("Nomes na lista: " + nomes.join(", "));
}

