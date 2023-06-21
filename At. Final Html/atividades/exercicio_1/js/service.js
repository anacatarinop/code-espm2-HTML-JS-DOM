// ENVIAR O JOGO PASSADO POR PARÂMETRO VIA POST PARA A API.
async function salvarJogo(data) {
    const response = await fetch("https://academico.espm.br/testeapi/jogo/criar", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response
}