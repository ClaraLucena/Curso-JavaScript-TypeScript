let varA = 'A'
let varB = 'B'
let varC = 'C'

/*varA = varB // B
varB = varC // C
varC = varA //A*/

const varATemp = varA 
varA = varB 
varB = varC 
varC = varATemp

console.log(varA, varB, varC)

// Solução alternativa 

/*[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC)*/
