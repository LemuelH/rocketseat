// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

let nota = 60;

if (nota > 90) {
  var notaCarac = "A";
} else if (nota >= 80 && nota <= 89) {
  var notaCarac = "B";
} else if (nota >= 80 && nota <= 89) {
  var notaCarac = "C";
} else if (nota >= 80 && nota <= 89) {
  var notaCarac = "D";
} else if (nota >= 80 && nota <= 89) {
  var notaCarac = "E";
} else {
  var notaCarac = "F";
}

console.log(`${nota} é ${notaCarac}`);
