const alunos =['Luiz', 'Maria', 'João', 'Ana',1, true, null, undefined, true];
console.log(alunos);
console.log(typeof alunos); //array é um objeto
console.log(alunos instanceof Array); //verificando se é um array, retorna true ou false
console.log(alunos[0]);
console.log(alunos[2]);
console.log(alunos[4]);
console.log(alunos.length) //tamanho do array

alunos[0] = 'Eduardo'; //alterando valor do array
console.log(alunos);