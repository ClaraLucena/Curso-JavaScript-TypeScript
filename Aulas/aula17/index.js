const pessoa1= { // isso seria um objeto
    nome: "Ana",
    sobrenome: "Silva",
    idade: 25,
    
    fala(){ // método do objeto, função que pertence ao objeto, poderia estar fora também 
        console.log(`Olá, mundo, eu me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`); // this referencia o próprio objeto
    }
}
const pessoa2= { // isso seria um objeto
    nome: "Bia",
    sobrenome: "Souza",         
    idade: 30
}

console.log(pessoa1.nome);
console.log(pessoa2.nome);

function criaPessoa(nome, sobrenome, idade){ // isso seria uma função fábrica de objetos
    return {nome: nome,
        sobrenome: sobrenome, // não precisa colocar os dois pontos e o nome do valor se forem iguais
        idade: idade        
    }; // quando o nome da propriedade é igual ao nome do valor, pode-se usar essa sintaxe reduzida
}
const pessoa3 = criaPessoa('Carlos', 'Oliveira', 28); // argumentos que serão passados para a função
console.log(pessoa3.nome);

// valores primitivos e por referência
//primitivos: string, number, boolean, undefined, null, symbol, bigint
let a = 10;
let b = a; // cópia do valor de a para b
console.log(a, b);
a = 20;
console.log(a, b); // b não é alterado, pois é uma cópia do valor de a

// por referência: array, object, function
let c= [1, 2, 3];
let d = c; // cópia por referência, ambos apontam para o mesmo array
console.log(c, d);
c.push(4);
console.log(c, d); // d é alterado, pois ambos apontam para o mesmo array

let e =[1, 2, 3];
let f = [...e]; // cópia do array usando spread operator,ou seja os tres pontos sao usados para copiar o conteudo do array
console.log(e, f);
e.push(4);
console.log(e, f); // f não é alterado, pois é uma cópia do array e não uma referência  
// do mesmo jeito funciona para objetos, funções, etc.