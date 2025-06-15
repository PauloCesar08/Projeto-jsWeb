const convertButton = document.querySelector(".convert-button"); //começo criando minha variável chamando o button

function convertValues(){
    const inputValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".value-to-convert")//valor em real
    const valueConverted = document.querySelector(".converted-value")//outras moedas
    
    const dolarToday = 5.54

    const convertValue = inputValue / dolarToday

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputValue)
    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertValue)

    console.log(convertValue)
}

convertButton.addEventListener("click", convertValues)  /*depois de criar a variável, eu crio uma lista de eventos pra quando
meu button for clicado, e crio uma function para ser chamada quando esse button for clicado
nessa function, quando o botão está sendo clicado, o add event listener mostra o valor que tem dentro do input, 
por eu ter botado .value no final, ele não observa o input todo, só o valor.
depois eu escolhi o valor do dolar, e depois criei outra variavel dizendo pra dividir o valor do input por 5.54*/