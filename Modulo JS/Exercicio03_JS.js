// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra
//     C = (F - 32) * 5/9
//     F = C * 9/5 + 32

function transformarGraus(unidade) {
  ehCelcius = unidade.toUpperCase().includes("C"); //transforma em C
  ehFahrenheit = unidade.toUpperCase().includes("F"); //transforma em F

  if (!ehCelcius && !ehFahrenheit) {
    //se não ehCelcius e ehFahrenheit
    throw new Error("Unidade de grau inválida. Insira Celcius ou Fahrenheit");
  } else if (ehCelcius == true) {
    newUnidade = Number(unidade.toUpperCase().replace("C", ""));
    console.log(newUnidade);
    fahrenheit = newUnidade * (9 / 5) + 32;
    console.log(fahrenheit + "F");
  } else {
    newUnidade = Number(unidade.toUpperCase().replace("F", ""));
    celcius = (newUnidade - 32) * (5 / 9);
    console.log(celcius.toFixed(2) + "C");
  }
}

try {
  transformarGraus("59C");
} catch (error) {
  console.log(error.message);
}
