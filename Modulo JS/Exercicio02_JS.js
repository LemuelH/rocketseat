// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: []
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e
// despesas e irá mostrar uma mensagem se a família está com
// saldo positivo ou negativo, seguido do valor do saldo.

let CaixaFamiliar = {
  despesas: [800.51, 200.23, 300.12, 600.63],
  receitas: [546.82, 987.49, 214.67, 782.38],
};

function SomarArray(array) {
  let total = 0;
  for (let valor of array) {
    total += valor;
  }
  return total;
}

function CalcularCaixa() {
  const somaReceita = SomarArray(CaixaFamiliar.receitas);
  const somaDespesas = SomarArray(CaixaFamiliar.despesas);
  const total = somaReceita - somaDespesas;
  if (total < 0) {
    console.log(`Saldo negativo, com valor de R$${total.toFixed(2)}.`);
  } else {
    console.log(`Saldo positivo, com valor de R$${total.toFixed(2)}.`);
  }
}

CalcularCaixa();
