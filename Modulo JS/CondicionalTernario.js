let pao = true;
let queijo = false;

const cafe_massa = pao || queijo ? 'CaféTop' : 'CafeRuim'
const cafe_massa1 = pao && queijo ? 'CaféTop' : 'CafeRuim'

console.log(cafe_massa)
console.log(cafe_massa1)


let ageLemuel = 20;
const PodeDirigir = ageLemuel >=  18 ? 'Pode dirigir' : 'Pode não. ele n vai não'
console.log(PodeDirigir) 