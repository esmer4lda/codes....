const API_URL = "";

let alunos = [];  
async function carregarAlunos() {
    try {
    const responta = await fetch(API_URL);
    if(responta.ok){
        alunos = await responta.json();
        mostrarLista();
        atualizarTotal();
    }
}catch(error){
    console.error('Erro ao carregar alunos:', error);
}}

async function cadastrarAluno() {
    let matricula = document.getElementById('matricula').value;
     let nome = document.getElementById('nome').value;
    
    // Validação SIMPLES (revisão if)
    if (!matricula || !nome) {
        alert('Preencha todos os campos!');
        return;
    }

    const novoAluno = {matricula : matricula,nome: nome};

    try {
        const resposta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },// transforma o objeto em string JSON para enviar ao backend
            body: JSON.stringify(novoAluno)
        });
        if (resposta.ok) {
            await carregarAlunos(); 
            limparCampos();
        }
    } catch (error) {
        alert("Erro ao salvar no banco MYSQL.");
        console.error('Erro ao cadastrar aluno:', error);
    }};

function mostrarLista() {
    lista.innerHTML = '';
    alunos.forEach(aluno => {

    let item = document.getElementById('li');
//usando o id unico gerado pelo banco de dados em vz do indice//
    item.innerHTML = `
    <strong>${aluno.matricula}</strong> - ${aluno.nome} 
    <span onclick ="removerAluno(${aluno.id})" class= "btn-remover">❌</span>`;
    lista.appendChild(item);
});

}

async function removerAluno(id) {
    if (confirm('Remover este aluno?')) {
        try {
            const resposta = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            if (resposta.ok) {
                await carregarAlunos();
            }
        } catch (error) {
            console.error('Erro ao remover do banco de dados:', error);
        }
    }
}

function atualizarTotal() {
    document.getElementById('totalAlunos').textContent = alunos.length;}

function limparCampos() {
    document.getElementById('matricula').value = '';
    document.getElementById('nome').value = '';

}

window.addEventListener('load', carregarAlunos);