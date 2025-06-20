const convertButton = document.querySelector(".convert-button"); //variável chamando o button
const currencySelect = document.querySelector(".select-currency")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".value-to-convert")//valor em real
    const valueConverted = document.querySelector(".converted-value")//outras moedas

    const dolarToday = 5.54
    const euroToday = 6.41
    const bitcoinToday = 575307.00
    const libraToday = 7.41


    if (currencySelect.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToday)
    }

    if (currencySelect.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }




    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputValue)


}



function currencyChange() {
    const currencyName = document.querySelector(".currency-name")
    const currencyLogo = document.querySelector(".currency-logo")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyLogo.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyLogo.src = "./assets/euro.png"
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyLogo.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyLogo.src = "./assets/libra.png"
    }

    if(currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyLogo.src = "./assets/real.png"
    }

}

currencySelect.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValues)  /*depois de criar a variável, eu crio uma lista de eventos pra quando
meu button for clicado, e crio uma function para ser chamada quando esse button for clicado
nessa function, quando o botão está sendo clicado, o add event listener mostra o valor que tem dentro do input, 
por eu ter botado .value no final, ele não observa o input todo, só o valor.
depois eu escolhi o valor do dolar, e depois criei outra variavel dizendo pra dividir o valor do input por 5.54*/