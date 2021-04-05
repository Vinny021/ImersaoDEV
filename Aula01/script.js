function converterDinheiro(cotacao){
    const cotacaoDinheiro = cotacao

    var precoDigitado = parseFloat(prompt("Digite o preço do produto:"))
    var precoReal = (precoDigitado * cotacaoDinheiro).toFixed(2)
    
    alert(`O valor do produto em reais fica R$${precoReal}`)
}

function converterDolar(){
    const cotacaoDolar = 5.52;

    converterDinheiro(cotacaoDolar);
}

function converterEuro(){
    const cotacaoEuro = 6.54;

    converterDinheiro(cotacaoEuro)
}

function converterAnosLuz(){
    const anosLuzEmKm= 9461000000000;
    
    var distanciaEmAnosLuz = parseFloat(prompt("Digite a distância em anos-luz:"))
    var DistanciaEmKm = (distanciaEmAnosLuz * anosLuzEmKm).toFixed(5)

    alert(`${distanciaEmAnosLuz} anos-luz é igual a ${DistanciaEmKm}Km.`)

}

function converterKm(){
    const kmEmAnosLuz= 1/9461000000000;
    
    var distanciaEmKm = parseFloat(prompt("Digite a distância em Km:"))
    var DistanciaEmAnosLuz = (distanciaEmKm * kmEmAnosLuz).toFixed(5)

    alert(`${distanciaEmKm} Km é igual a ${DistanciaEmAnosLuz}Anos-luz.`)

}

function mudarTexto(buttonId, texto){
    document.getElementById(buttonId).textContent = texto;
}

function mudarFuncao(buttonId, funcao){
    document.getElementById(buttonId).onclick = funcao
}

function mudarPaginaDistancia(){
    document.body.style.backgroundImage = "url(https://blog.enem.com.br/wp-content/uploads/2020/04/img-materia-r7-inter.jpg)"
    document.body.style.backgroundSize = "180vh"
    document.body.style.backgroundPosition = "center"
    document.getElementById("page-subtitle").style.visibility = "hidden"
    mudarTexto("page-description","Escolha o tipo de conversão desejada")
    mudarTexto("change-description","Conversor de moedas")
    mudarTexto('button1', "Anos Luz -> Km")
    mudarTexto('button2', "Km -> Anos Luz")
    mudarTexto('buttonMudanca', "Moedas")
    mudarFuncao('button1', converterAnosLuz)
    mudarFuncao('button2', converterKm)
    mudarFuncao('buttonMudanca', mudarPaginaMoeda)
}

function mudarPaginaMoeda(){
    document.body.style.backgroundImage = "url('https://www.alura.com.br/assets/img/imersoes/dev-2021/dia-1-conversor-de-moedas.png')"
    document.body.style.backgroundSize = "100vh"
    document.body.style.backgroundPosition = "center bottom"
    document.getElementById("page-subtitle").style.visibility = "visible"
    mudarTexto("page-description","Escolha a moeda a ser convertida")
    mudarTexto("change-description","Conversor de distâncias")
    mudarTexto('button1', "Dolar")
    mudarTexto('button2', "Euro")
    mudarTexto('buttonMudanca', "Distância")
    mudarFuncao('button1', converterDolar)
    mudarFuncao('button2', converterEuro)
    mudarFuncao('buttonMudanca', mudarPaginaDistancia)
}

