// INPUTS DO FORMULÁRIO.
const nomeInput = document.getElementById("nome")
const descricaoInput = document.getElementById("descricao")
const produtoraInput = document.getElementById("produtora")
const anoInput = document.getElementById("ano")
const idadeMinimaInput = document.getElementById("idadeMinima")

// DIVS PARA TRATAMENTO DE ERROS.
const msgErrorInput = document.getElementById("errorMsg")
const sucessoMsgInput = document.getElementById("sucessoMsg")

// CADASTRA O JOGO VIA INPUT ENVIADO PELO USUÁRIO
async function cadastrar() {
    msgErrorInput.innerHTML = ""
    msgErrorInput.hidden = true
    sucessoMsgInput.innerHTML = ""
    sucessoMsgInput.hidden = true

    // SE VALIDADO ENVIA O JOGO PARA A API.
    if (validarTudo()) {
        const jogo = {
            nome: nomeInput.value,
            descricao: descricaoInput.value,
            produtora: produtoraInput.value,
            ano: parseInt(anoInput.value),
            idadeMinima: parseInt(idadeMinimaInput.value)
        }

        await salvarJogo(jogo)
        sucessoMsgInput.innerHTML = "Jogo salvo com sucesso."
        sucessoMsgInput.hidden = false
    }
}

// VALIDA TODAS AS INPUTS DO FORMULARIO, RETORNA TRUE CASO TODAS INPUTS ESTEJAM VALIDADAS.
function validarTudo() {
    if (!nomeInput.value || nomeInput.value == "" || nomeInput.value.length < 3) {
        return enviarMensagemErro("Nome de jogo inválido.")
    }

    if (!descricaoInput.value || descricaoInput.value == "" || descricaoInput.value.length < 3) {
        return enviarMensagemErro("Descrição de jogo inválido.")
    }

    if (!produtoraInput.value || produtoraInput.value == "" || produtoraInput.value.length < 3) {
        return enviarMensagemErro("Nome da produtora do jogo inválido.")
    }

    if (!anoInput.value || anoInput.value == "" || anoInput.value.length != 4 || parseInt(anoInput.value) > 2022 || parseInt(anoInput.value) < 1958) {
        return enviarMensagemErro("Ano de jogo inválido. Valores aceitos são entre 1958 (lançamento do primeiro jogo) até o ano atual (2022).")
    }

    if (!idadeMinimaInput.value || idadeMinimaInput.value == "" || parseInt(idadeMinimaInput.value) > 18 || parseInt(idadeMinimaInput.value) < 0) {
        return enviarMensagemErro("Idade mínima inválida. Valores aceitos são entre 0 e 18.")
    }

    return true
}

// ENVIA E TORNA VISIVEL MENSAGEM DE ERRO PARA O USUÁRIO.
function enviarMensagemErro(msg) {
    msgErrorInput.innerHTML = msg
    msgErrorInput.hidden = false
    return false
}