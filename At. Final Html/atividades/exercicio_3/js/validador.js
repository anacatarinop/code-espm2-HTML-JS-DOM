const msgErrorInput = document.getElementById("msgError")

// CALCULA QUANTOS COMPETIDORES PASSARAM NO TESTE
function calcular() {
    const compAprov = document.getElementById("competidores-apv")
    document.getElementById("resultado").hidden = true
    compAprov.innerHTML = ""

    if (validarTudo()) {
        const pontuacaoMinima = parseFloat(document.getElementById("pontuacao-minima").value)
        let competidoresAprovadosTexto = ""

        // FAZ UM LOOPING DE 1 A 8 DE ACORDO COM OS NÚMERO DE COMPETIDORES INFORMADO NA DOCUMENTAÇÃO.
        // OS ID`S DAS INPUTS DAS NOTAS FORAM PADRONIZADAS PARA FACILITAR A VALIDAÇÃO, SEGUINDO O SEGUINTE PADRÃO:
        // comp{{numero do competidor}}-p{{numero da prova}}.
        for (let i = 1; i < 9; i++) {
            const nota1 = parseFloat(document.getElementById("comp" + i + "-p1").value)
            const nota2 = parseFloat(document.getElementById("comp" + i + "-p2").value)
            const soma = nota1 + nota2

            if (soma >= pontuacaoMinima) {
                competidoresAprovadosTexto += "Competidor " + i + " <br>"
            }
        }

        compAprov.innerHTML = competidoresAprovadosTexto
        document.getElementById("resultado").hidden = false
    }
}

// VALIDA SE TODAS AS IMPUTS DOS COMPETIDORES ESTAO PREENCHIDAS CORRETAMENTE, CASO SIM, RETORNA TRUE
function validarTudo() {
    for (let i = 1; i < 9; i++) {
        const nota1 = document.getElementById("comp" + i + "-p1").value
        const nota2 = document.getElementById("comp" + i + "-p2").value

        if (!nota1 || nota1 < 0 || nota1 > 100) {
            return enviarMensagemErro("A nota 1 do Competidor " + i + ", está inválida, precisa ser um valor entre 0 e 100")
        }

        if (!nota2 || nota2 < 0 || nota2 > 100) {
            return enviarMensagemErro("A nota 2 do Competidor " + i + ", está inválida, precisa ser um valor entre 0 e 100")
        }

        msgErrorInput.innerHTML = ""
        msgErrorInput.hidden = true
    }

    const pontuacaoMinima = document.getElementById("pontuacao-minima").value

    if (!pontuacaoMinima || pontuacaoMinima < 0 || pontuacaoMinima > 200) {
        return enviarMensagemErro("A pontuação mínima está inválida, precisa ser um valor entre 0 e 200")
    }

    return true
}

// ENVIA E TORNA VISIVEL MENSAGEM DE ERRO PARA O USUÁRIO.
function enviarMensagemErro(msg) {
    msgErrorInput.innerHTML = msg
    msgErrorInput.hidden = false
    return false
}