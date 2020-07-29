document.querySelector('form').addEventListener('submit', buscaDados)

function buscaDados(e) {
    e.preventDefault()
    
    let cep = document.querySelector('[name=cep]').value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    
    fetch(url)
    .then(resp => {
        if ( ! resp.ok ) {
            throw new Error(`status: ${resp.status}`)
        }
        return resp.json()
    })
    .then(data => {
        document.querySelector('#logradouro').textContent = data.logradouro
        document.querySelector('#complemento').textContent = data.complemento
        document.querySelector('#bairro').textContent = data.bairro
        document.querySelector('#localidade').textContent = data.localidade
    })
    .catch(e => console.log(e))
}