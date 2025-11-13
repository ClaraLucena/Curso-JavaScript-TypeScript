//FUNÇÕES
function saudacao(nome){
    console.log(`Olá, seja bem-vindo(a), ${nome}!`);
}
saudacao('Luiz');

function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));
console.log(soma(10, 20));
//console.log(resultado); // Vai dar erro, pois resultado é uma variável local da função soma e não pode ser acessada fora dela.
console.log(typeof soma);   

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//ARROW FUNCTION
const raiz2 = (n) => {
    return n ** 0.5; 
}
console.log(raiz2(36)); 
//se tiver apenas um parâmetro, pode retirar os parênteses
const raiz3 = n => n ** 0.5;
console.log(raiz3(49)); 

