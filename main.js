/*
alert("Bom Dia, vamos iniciar"); //adiciona uma mensagem incial ao carregar a pagina
//string
let nomeUsuario = "Lucas H.";
console.log(nomeUsuario); // evidencia a variavel
console.log('Bom Dia, "professores"!');
console.log(`Seja bem-vindo(a), ${nomeUsuario}!`);
nomeUsuario = prompt("Digite o seu nome: ");
console.log(`Seu nome é ${nomeUsuario}`);

//number - usando número inteiro
let idade = 28;
idade = prompt("Digite sua idade: "); // quando redefine a variavel não precisa colocar o ´let` novamente
console.log(`Seu nome é ${nomeUsuario} e sua idade é ${idade}`);

//number - usando números decimais
let peso = prompt("Digite o seu peso: "); // poderia ter utilizado "let peso = parte inteira . parte decimal"
console.log(`Seu nome é ${nomeUsuario}, sua idade é ${idade} anos e o seu peso é ${peso}kg`);

//boolean - vardadeiro(true) ou falso(false)
let condicao = true;
let condicaofalse = false;
console.log(condicao,condicaofalse);
*/

/*
//Operadores Aritméticos 
let soma;
let subtracao;
let produto;
let divisao;
let resto;
soma = 10 + 3;
subtracao = 10 - 3;
produto = 10 * 3;
divisao = 10/3;
resto = 10 % 3;
console.log(`O resultado da soma = ${soma}`);
console.log(`O resultado da subtração = ${subtracao}`);
console.log(`O resultado da multiplicação = ${produto}`);
console.log(`O resultado da divisão = ${divisao}`);
console.log(`O resto da divisão = ${resto}`);

//Estruturas condicionais
let numero = prompt("Digite um número: "); 
if((numero % 2) == 0){
    console.log("O número é par!");
}else{
    console.log("O número é ímpar!")
}

//Operadores de Comparação
let idade;
idade = prompt("Digite sua idade: ");
if(idade >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você não é maior de idade");
}

//Operadores Lógicos
if(idade < 12){
    console.log("Você é uma criança");
}else if( idade >= 12 && idade <= 18 ){
    console.log("Você é jovem");
}else{
    console.log("Você é adulto");
}

let numeroDois = 34;
if(numero > 28 || numero < 30 ){
    console.log(numeroDois);
}

let valor = false;
console.log(!valor);

// Number - constantes e métodos para trabalhar com números
let variavel = "10";
console.log(Number(variavel));

// array (vetor) coloca mais de um elemento
let array = [1,10,12]; // vetor, priemiro elemento"0", segundo elemento "1" e terceiro elemento"2"
console.log(array[0]); // pode colocar mais do que um so colocar ;

// Estrutura de Repetição
for(let i = 0; i < 5; i++){
    console.log(i);
}

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//Função - Organizar e reutilizar o código
function somaFuncao(numero1, numero2) {
    let somaNumeros;
    somaNumeros = numero1 + numero2;
    return somaNumeros;
}
*/

