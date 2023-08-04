/*Faça uma estrutura if/else para verificar se um usuário pode dirigir; Armazene em
variáveis algumas informações sobre o usuário: idade e se tem CNH. Se a idade for maior
que 18 e não possuir CNH, exiba uma mensagem; Se a idade for maior que 18 e tem CNH, exiba
uma mensagem; Se não tiver 18 e nem CNH, exiba outra mensagem; */

let idade = 15;
let cnh = false;

if(idade >= 18 && cnh == true) {
  console.log("Sim, é permitido dirigir;");
} else if(idade >= 18 && cnh == false) {
  console.log("Não é permitido dirigir, porém pode fazer o processo para retirada da CNH;");
} else {
  console.log("Não tem idade permitida para dirigir;");
}