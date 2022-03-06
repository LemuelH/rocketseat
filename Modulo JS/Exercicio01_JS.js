// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

function getNota(nota) {
  let notaA = nota > 90 && nota <= 100;
  let notaB = nota >= 80 && nota <= 89;
  let notaC = nota >= 70 && nota <= 79;
  let notaD = nota >= 80 && nota <= 69;
  let notaF = nota < 60 && nota == 0;

  if (notaA) {
    notaCarac = "A";
  } else if (notaB) {
    notaCarac = "B";
  } else if (notaC) {
    notaCarac = "C";
  } else if (notaD) {
    notaCarac = "D";
  } else if (notaF) {
    notaCarac = "F";
  } else{
    console.log("NOTA INVÁLIDA")
    return
  }
  console.log(`${nota} é ${notaCarac}`);
}

getNota(75);
