//Revuperando os INPUTs
let parcela1_1 = document.getElementById("parcela1-1");
let parcela2_1 = document.getElementById("parcela2-1");
let parcela3_1 = document.getElementById("parcela3-1");
let parcela4_1 = document.getElementById("parcela4-1");
let parcela5_1 = document.getElementById("parcela5-1");
let parcela6_1 = document.getElementById("parcela6-1");
let parcela7_1 = document.getElementById("parcela7-1");
let parcela8_1 = document.getElementById("parcela8-1");

let parcela1_2 = document.getElementById("parcela1-2");
let parcela2_2 = document.getElementById("parcela2-2");
let parcela3_2 = document.getElementById("parcela3-2");
let parcela4_2 = document.getElementById("parcela4-2");
let parcela5_2 = document.getElementById("parcela5-2");
let parcela6_2 = document.getElementById("parcela6-2");
let parcela7_2 = document.getElementById("parcela7-2");
let parcela8_2 = document.getElementById("parcela8-2");

let parcela1_3 = document.getElementById("parcela1-3");
let parcela2_3 = document.getElementById("parcela2-3");
let parcela3_3 = document.getElementById("parcela3-3");
let parcela4_3 = document.getElementById("parcela4-3");
let parcela5_3 = document.getElementById("parcela5-3");
let parcela6_3 = document.getElementById("parcela6-3");
let parcela7_3 = document.getElementById("parcela7-3");
let parcela8_3 = document.getElementById("parcela8-3");

let parcela1_4 = document.getElementById("parcela1-4");
let parcela2_4 = document.getElementById("parcela2-4");
let parcela3_4 = document.getElementById("parcela3-4");
let parcela4_4 = document.getElementById("parcela4-4");
let parcela5_4 = document.getElementById("parcela5-4");
let parcela6_4 = document.getElementById("parcela6-4");
let parcela7_4 = document.getElementById("parcela7-4");
let parcela8_4 = document.getElementById("parcela8-4");

let parcela1_5 = document.getElementById("parcela1-5");
let parcela2_5 = document.getElementById("parcela2-5");
let parcela3_5 = document.getElementById("parcela3-5");
let parcela4_5 = document.getElementById("parcela4-5");
let parcela5_5 = document.getElementById("parcela5-5");
let parcela6_5 = document.getElementById("parcela6-5");
let parcela7_5 = document.getElementById("parcela7-5");
let parcela8_5 = document.getElementById("parcela8-5");

let parcela1_6 = document.getElementById("parcela1-6");
let parcela2_6 = document.getElementById("parcela2-6");
let parcela3_6 = document.getElementById("parcela3-6");
let parcela4_6 = document.getElementById("parcela4-6");
let parcela5_6 = document.getElementById("parcela5-6");
let parcela6_6 = document.getElementById("parcela6-6");
let parcela7_6 = document.getElementById("parcela7-6");
let parcela8_6 = document.getElementById("parcela8-6");

let custo_1 = document.getElementById("custo-1");
let custo_2 = document.getElementById("custo-2");
let custo_3 = document.getElementById("custo-3");
let custo_4 = document.getElementById("custo-4");
let custo_5 = document.getElementById("custo-5");
let custo_6 = document.getElementById("custo-6");

let total_1 = document.getElementById("total-1");
let total_2 = document.getElementById("total-2");
let total_3 = document.getElementById("total-3");
let total_4 = document.getElementById("total-4");
let total_5 = document.getElementById("total-5");
let total_6 = document.getElementById("total-6");

let capitalDeGiroTotal_1 = 0;
let capitalDeGiroTotal_2 = 0;
let capitalDeGiroTotal_3 = 0;
let capitalDeGiroTotal_4 = 0;
let capitalDeGiroTotal_5 = 0;
let capitalDeGiroTotal_6 = 0;


//Montando o ARRAY DA PARCELA 1
const inputsParcela1 = [
  parcela1_1,
  parcela2_1,
  parcela3_1,
  parcela4_1,
  parcela5_1,
  parcela6_1,
  parcela7_1,
  parcela8_1
];

//Montando o ARRAY DA PARCELA 2
const inputsParcela2 = [
  parcela1_2,
  parcela2_2,
  parcela3_2,
  parcela4_2,
  parcela5_2,
  parcela6_2,
  parcela7_2,
  parcela8_2
];

//Montando o ARRAY DA PARCELA 3
const inputsParcela3 = [
  parcela1_3,
  parcela2_3,
  parcela3_3,
  parcela4_3,
  parcela5_3,
  parcela6_3,
  parcela7_3,
  parcela8_3
];

//Montando o ARRAY DA PARCELA 4
const inputsParcela4 = [
  parcela1_4,
  parcela2_4,
  parcela3_4,
  parcela4_4,
  parcela5_4,
  parcela6_4,
  parcela7_4,
  parcela8_4
]

//Montando o ARRAY DA PARCELA 5
const inputsParcela5 = [
  parcela1_5,
  parcela2_5,
  parcela3_5,
  parcela4_5,
  parcela5_5,
  parcela6_5,
  parcela7_5,
  parcela8_5
]

//Montando o ARRAY DA PARCELA 6
const inputsParcela6 = [
  parcela1_6,
  parcela2_6,
  parcela3_6,
  parcela4_6,
  parcela5_6,
  parcela6_6,
  parcela7_6,
  parcela8_6
]

//CALCULANDO OS VALORES DA PARCELA 1
function atualizarValoresTotaisParcela1() {
  var totalParcela1 = 0;
  var custoColuna1 = custo_1.value || 0;

  for (var i = 0; i < inputsParcela1.length; i++) {
    var inputValue = parseFloat(inputsParcela1[i].value);
    if (!isNaN(inputValue)) {
      totalParcela1 += inputValue;
    }
  }

  //CALCULANDO O TOTAL COM O CUSTO
  totalParcela1-=custoColuna1;

  //Formatando valor para BRL
  totalParcela1Formated = totalParcela1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  //REPLACE DO VALOR NO INPUT
  total_1.value = totalParcela1Formated;

  //ATUALIZANDO VARIAVEL PARA CALCULAR O CAPITAL DE GIRO
  capitalDeGiroTotal_1 = totalParcela1;

  atualizarCapitalDeGiro();
}

//CALCULANDO OS VALORES DA PARCELA 2
function atualizarValoresTotaisParcela2() {
  var totalParcela2 = 0;
  var custoColuna2 = custo_2.value || 0;

  for (var i = 0; i < inputsParcela2.length; i++) {
    var inputValue = parseFloat(inputsParcela2[i].value);
    if (!isNaN(inputValue)) {
      totalParcela2 += inputValue;
    }
  }

  //CALCULANDO O TOTAL COM O CUSTO
  totalParcela2-=custoColuna2;

  //Formatando valor para BRL
  totalParcela2Formated = totalParcela2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
  //REPLACE DO VALOR NO INPUT
  total_2.value = totalParcela2Formated;

  //ATUALIZANDO VARIAVEL PARA CALCULAR O CAPITAL DE GIRO
  capitalDeGiroTotal_2 = totalParcela2;

  atualizarCapitalDeGiro();
}

//CALCULANDO OS VALORES DA PARCELA 3
function atualizarValoresTotaisParcela3() {
  var totalParcela3 = 0;
  var custoColuna3 = custo_3.value || 0;

  for (var i = 0; i < inputsParcela3.length; i++) {
    var inputValue = parseFloat(inputsParcela3[i].value);
    if (!isNaN(inputValue)) {
      totalParcela3 += inputValue;
    }
  }
  //CALCULANDO O TOTAL COM O CUSTO
  totalParcela3-=custoColuna3;

  //Formatando valor para BRL
  totalParcela3Formated = totalParcela3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  //REPLACE DO VALOR NO INPUT
  total_3.value = totalParcela3Formated;

  //ATUALIZANDO VARIAVEL PARA CALCULAR O CAPITAL DE GIRO
  capitalDeGiroTotal_3 = totalParcela3;

  atualizarCapitalDeGiro();
}

//CALCULANDO OS VALORES DA PARCELA 4
function atualizarValoresTotaisParcela4() {
  var totalParcela4 = 0;
  var custoColuna4 = custo_4.value || 0;

  for (var i = 0; i < inputsParcela4.length; i++) {
    var inputValue = parseFloat(inputsParcela4[i].value);
    if (!isNaN(inputValue)) {
      totalParcela4 += inputValue;
    }
  }
  //CALCULANDO O TOTAL COM O CUSTO
  totalParcela4-=custoColuna4;

  //Formatando valor para BRL
  totalParcela4Formated = totalParcela4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  //REPLACE DO VALOR NO INPUT
  total_4.value = totalParcela4Formated;

  //ATUALIZANDO VARIAVEL PARA CALCULAR O CAPITAL DE GIRO
  capitalDeGiroTotal_4 = totalParcela4;

  atualizarCapitalDeGiro();
}

//CALCULANDO OS VALORES DA PARCELA 5
function atualizarValoresTotaisParcela5() {
  var totalParcela5 = 0;
  var custoColuna5 = custo_5.value || 0;

  for (var i = 0; i < inputsParcela5.length; i++) {
    var inputValue = parseFloat(inputsParcela5[i].value);
    if (!isNaN(inputValue)) {
      totalParcela5 += inputValue;
    }
  }
  //CALCULANDO O TOTAL COM O CUSTO
  totalParcela5-=custoColuna5;

  //Formatando valor para BRL
  totalParcela5Formated = totalParcela5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  //REPLACE DO VALOR NO INPUT
  total_5.value = totalParcela5Formated;

  //ATUALIZANDO VARIAVEL PARA CALCULAR O CAPITAL DE GIRO
  capitalDeGiroTotal_5 = totalParcela5;

  atualizarCapitalDeGiro();
}

//CALCULANDO OS VALORES DA PARCELA 6
function atualizarValoresTotaisParcela6() {
  var totalParcela6 = 0;
  var custoColuna6 = custo_6.value || 0;

  for (var i = 0; i < inputsParcela6.length; i++) {
    var inputValue = parseFloat(inputsParcela6[i].value);
    if (!isNaN(inputValue)) {
      totalParcela6 += inputValue;
    }
  }
  //CALCULANDO O TOTAL COM O CUSTO
  totalParcela6-=custoColuna6;

  //Formatando valor para BRL
  totalParcela6Formated = totalParcela6.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  //REPLACE DO VALOR NO INPUT
  total_6.value = totalParcela6Formated;

  //ATUALIZANDO VARIAVEL PARA CALCULAR O CAPITAL DE GIRO
  capitalDeGiroTotal_6 = totalParcela6;

  atualizarCapitalDeGiro();
}

//CALCULANDO O CAPITAL DE GIRO
function atualizarCapitalDeGiro() {
  var totalNegativo = 0;

  if(capitalDeGiroTotal_1 < 0){
    totalNegativo += capitalDeGiroTotal_1;
  }
  if(capitalDeGiroTotal_2 < 0){
    totalNegativo += capitalDeGiroTotal_2;
  }
  if(capitalDeGiroTotal_3 < 0){
    totalNegativo += capitalDeGiroTotal_3;
  }
  if(capitalDeGiroTotal_4 < 0){
    totalNegativo += capitalDeGiroTotal_4;
  }
  if(capitalDeGiroTotal_5 < 0){
    totalNegativo += capitalDeGiroTotal_5;
  }
  if(capitalDeGiroTotal_6 < 0){
    totalNegativo += capitalDeGiroTotal_6;
  }
  if(capitalDeGiroTotal_6 < 0){
    totalNegativo += capitalDeGiroTotal_6;
  }

  document.getElementById('capital-giro').textContent = 'Capital de Giro: R$ ' + totalNegativo.toFixed(2);

}

// Executando a funçao toda vez que tira o cursor do input
custo_1.onblur = function(){atualizarValoresTotaisParcela1()}
custo_2.onblur = function(){atualizarValoresTotaisParcela2()}
custo_3.onblur = function(){atualizarValoresTotaisParcela3()}
custo_4.onblur = function(){atualizarValoresTotaisParcela4()}
custo_5.onblur = function(){atualizarValoresTotaisParcela5()}
custo_6.onblur = function(){atualizarValoresTotaisParcela6()}

parcela1_1.onblur = function(){atualizarValoresTotaisParcela1()}
parcela2_1.onblur = function(){atualizarValoresTotaisParcela1()}
parcela3_1.onblur = function(){atualizarValoresTotaisParcela1()}
parcela4_1.onblur = function(){atualizarValoresTotaisParcela1()}
parcela5_1.onblur = function(){atualizarValoresTotaisParcela1()}
parcela6_1.onblur = function(){atualizarValoresTotaisParcela1()}
parcela7_1.onblur = function(){atualizarValoresTotaisParcela1()}
parcela8_1.onblur = function(){atualizarValoresTotaisParcela1()}

parcela1_2.onblur = function(){atualizarValoresTotaisParcela2()}
parcela2_2.onblur = function(){atualizarValoresTotaisParcela2()}
parcela3_2.onblur = function(){atualizarValoresTotaisParcela2()}
parcela4_2.onblur = function(){atualizarValoresTotaisParcela2()}
parcela5_2.onblur = function(){atualizarValoresTotaisParcela2()}
parcela6_2.onblur = function(){atualizarValoresTotaisParcela2()}
parcela7_2.onblur = function(){atualizarValoresTotaisParcela2()}
parcela8_2.onblur = function(){atualizarValoresTotaisParcela2()}

parcela1_3.onblur = function(){atualizarValoresTotaisParcela3()}
parcela2_3.onblur = function(){atualizarValoresTotaisParcela3()}
parcela3_3.onblur = function(){atualizarValoresTotaisParcela3()}
parcela4_3.onblur = function(){atualizarValoresTotaisParcela3()}
parcela5_3.onblur = function(){atualizarValoresTotaisParcela3()}
parcela6_3.onblur = function(){atualizarValoresTotaisParcela3()}
parcela7_3.onblur = function(){atualizarValoresTotaisParcela3()}
parcela8_3.onblur = function(){atualizarValoresTotaisParcela3()}

parcela1_4.onblur = function(){atualizarValoresTotaisParcela4()}
parcela2_4.onblur = function(){atualizarValoresTotaisParcela4()}
parcela3_4.onblur = function(){atualizarValoresTotaisParcela4()}
parcela4_4.onblur = function(){atualizarValoresTotaisParcela4()}
parcela5_4.onblur = function(){atualizarValoresTotaisParcela4()}
parcela6_4.onblur = function(){atualizarValoresTotaisParcela4()}
parcela7_4.onblur = function(){atualizarValoresTotaisParcela4()}
parcela8_4.onblur = function(){atualizarValoresTotaisParcela4()}

parcela1_5.onblur = function(){atualizarValoresTotaisParcela5()}
parcela2_5.onblur = function(){atualizarValoresTotaisParcela5()}
parcela3_5.onblur = function(){atualizarValoresTotaisParcela5()}
parcela4_5.onblur = function(){atualizarValoresTotaisParcela5()}
parcela5_5.onblur = function(){atualizarValoresTotaisParcela5()}
parcela6_5.onblur = function(){atualizarValoresTotaisParcela5()}
parcela7_5.onblur = function(){atualizarValoresTotaisParcela5()}
parcela8_5.onblur = function(){atualizarValoresTotaisParcela5()}

parcela1_6.onblur = function(){atualizarValoresTotaisParcela6()}
parcela2_6.onblur = function(){atualizarValoresTotaisParcela6()}
parcela3_6.onblur = function(){atualizarValoresTotaisParcela6()}
parcela4_6.onblur = function(){atualizarValoresTotaisParcela6()}
parcela5_6.onblur = function(){atualizarValoresTotaisParcela6()}
parcela6_6.onblur = function(){atualizarValoresTotaisParcela6()}
parcela7_6.onblur = function(){atualizarValoresTotaisParcela6()}
parcela8_6.onblur = function(){atualizarValoresTotaisParcela6()}