const tabela = document.getElementById("tabela-principal")

// ATUALIZA OS VALORES DA TABELA ASSIM QUE A PÁGINA É CARREGADA.
window.onload = function () {
    atualizarTabela()
}

// ATUALIZA OS VALORES DA TABELA, CONSULTANDO SEU CONTEÚDO NA API.
async function atualizarTabela() {
    limparTabela()
    const response = await fetch("https://academico.espm.br/testeapi/jogo/listar", {method: "GET"})
    const jogos = await response.json()

    for (let i = 0; i < jogos.length; i++) {
        const row = tabela.insertRow(i+1)

        const idCell = row.insertCell(0)
        const nomeCell = row.insertCell(1)
        const descricaoCell = row.insertCell(2)
        const produtoraCell = row.insertCell(3)
        const anoCell = row.insertCell(4)
        const idadeMinimaCell = row.insertCell(5)

        idCell.innerHTML = jogos[i].id
        nomeCell.innerHTML = jogos[i].nome
        descricaoCell.innerHTML = jogos[i].descricao
        produtoraCell.innerHTML = jogos[i].produtora
        anoCell.innerHTML = jogos[i].ano
        idadeMinimaCell.innerHTML = jogos[i].idadeMinima
    }
}

// LIMPA OS ROWS DA TABELA.
function limparTabela() {
    for (let i = 1; i < tabela.rows.length; i++) {
        tabela.deleteRow(i--)
    }
}