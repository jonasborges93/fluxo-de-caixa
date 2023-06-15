function calcularTotais() {
  for (var i = 1; i <= 8; i++) {
    var totalColuna = 0;
    var custo = parseFloat(document.getElementById('custo-' + i).value) || 0;

    for (var j = 1; j <= 4; j++) {
      var valorParcela = parseFloat(document.getElementById('parcela' + j + '-' + i).value) || 0;
      totalColuna += valorParcela;
    }

    totalColuna -= custo;
    document.getElementById('total-' + i).textContent = 'Total: R$ ' + totalColuna.toFixed(2);
  }

  calcularCapitalGiro();
}

function calcularCapitalGiro() {
  var totalNegativo = 0;

  for (var i = 1; i <= 8; i++) {
    var totalColuna = parseFloat(document.getElementById('total-' + i).textContent.replace('Total: R$ ', ''));

    if (totalColuna < 0) {
      totalNegativo += totalColuna;
    }
  }

  document.getElementById('capital-giro').textContent = 'Capital de Giro: R$ ' + totalNegativo.toFixed(2);
}