const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

function imc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value

    if(nome != '' && altura != '' && peso != ''){
        const imc = peso/(altura * altura).toFixed(1)
        
        if (imc <= 18.5){
            classificacao = 'Magreza'
        } else if (imc <= 24.9){
            classificacao = 'Normal'
        } else if (imc <= 29.9){
            classificacao = 'Sobrepeso'
        } else if (imc <= 39.9){
            classificacao = 'Obesidade'
        } else if (imc > 40){
            classificacao = 'Obesidade grave'
        }

        resultado.textContent = (nome + " o seu imc é de: " + imc + " e sua classificação é: " + classificacao)  
    
    }else{
        resultado.textContent = "Preencha todos os dados."
    }
}

calcular.addEventListener('click', imc)