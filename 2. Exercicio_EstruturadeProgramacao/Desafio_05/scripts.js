/*Crie uma função chamada classificarNumero que recebe um número inteiro como argumento.A função
deve retornar uma string com a classificação do número de acordo com as seguintes regras:Se o número
for positivo e par, retorne "Positivo e Par"; Se o número for positivo e ímpar, retorne "Positivo e Ímpar".
Se o número for negativo, retorne "Negativo". Se o número for zero, retorne "Neutro".*/


function classificarNumero(num) {
    if (num > 0 && num % 2 === 0) {
        return "Positivo e Par";
    } else if (num > 0 && num % 2 !== 0) {
        return "Positivo e Ímpar";
    } else if (num < 0) {
        return "Negativo";
    } else {
        return "Neutro";
    }

}

