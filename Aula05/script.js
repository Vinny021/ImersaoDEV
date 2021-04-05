
function adicionarFilme(){
    var filmeDigitado = document.querySelector('#filme').value

    verificaInput(filmeDigitado)
    
    document.querySelector("#filme").value = ""
}

function verificaInput(inputDoUsuario){
    if(inputDoUsuario.indexOf('embed') > -1){
        inserirFilmeLista(inputDoUsuario)
    }else{
        alert('Link inválido')
    }
}

function inserirFilmeLista(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementosLista = `<embed src="${filme}" type="video/webm" width="400" height="225">`
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementosLista
}
