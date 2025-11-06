/*
Luiz Otávio Miranda tem 30anos , pesa 84kg, tem 1.80 de altura e seu IMC é de 25.9592592592594
Luiz otávio nasceu em 1980
 */
const nome=  'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const alturaEmM = 1.80
let imc // peso / (altura * altura)
let anoNascimento

anoNascimento = 2025 - idade
imc = peso / (alturaEmM * alturaEmM)

console.log( nome, sobrenome, ' tem ', idade, ' anos, pesa ', peso, ' kg, tem ', alturaEmM, ' de altura e seu IMC é de ', imc)
console.log(nome, sobrenome, ' nasceu em ', anoNascimento)

//pode ser também:
/*console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)*/

const num1 = 10
const num2= 'Luiz'
console.log(num1 * num2)// vai dar NaN (Not a Number) pq não é possível multiplicar número por string

const num3 = 10
const num4 = '5'
console.log (num3 * num4) // vai dar 50 pq o JS converte a string '5' para número 5 e faz a multiplicação   

const num5 = 10
const num6 = parseInt ( '5') // converte a string '5' para número 5
console.log (num5 + num6) // vai dar 15 pq agora são dois números e faz a soma  