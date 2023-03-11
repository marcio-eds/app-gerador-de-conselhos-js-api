document.querySelector('.icone-dado').addEventListener('click', ()=> gerarConselhoAleatorio())

async function gerarConselhoAleatorio(){
    const url = "https://api.adviceslip.com/advice"   
    const resposta = await fetch(url)
    const conselho = await resposta.json()
    const idDoConselho = conselho.slip.id
    const textoDoConselho = conselho.slip.advice
    document.querySelector(".id-conselho").textContent = `ADVICE #${idDoConselho}`
    document.querySelector(".texto-conselho").textContent = textoDoConselho
    
}

gerarConselhoAleatorio()