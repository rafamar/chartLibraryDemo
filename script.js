/*//////////////////////////////////////////////////////
//                                                    //
//                CONSTANTES                          //
//                    Y                               //
//             VARIABLES COMUNES                      //                                                   //
//                                                    //
//////////////////////////////////////////////////////*/

const JANUARY = 0;
const FEBRUARY = 1;
const MARCH = 2;
const APRIL = 3;
const MAY = 4;
const JUNE = 5;

const R = 0;
const G = 1;
const B = 2;
const A = 3;

const months = [JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE];

const colorPickers = [];
const inputNumbersData = [];

var opacityBack = 0.2;




/*//////////////////////////////////////////////////////
//                                                    //
//          FUNCIONES DE CREACIÖN                     //
//                                                    //
//                                                    //
///////////////////////////////////////////////////////*/

function crearGraficoRandom(tipo) {
    
    let data = generateRandomNumberList(6, 1, 20);
    
    crearGrafico(tipo, data);
}

function crearGrafico(tipo, data) {
    
  let ctx = document.getElementById('myChart').getContext('2d');
  let colors = ['rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)'];

  let backColors = rgbListToRGBAString(colors, opacityBack);
  let borderColors = rgbListToRGBAString(colors, 1);

  let myChart = new Chart(ctx, {
    type: tipo,
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [{
        label: 'Ventas',
        data: data,
        backgroundColor: backColors,
        borderColor: borderColors,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
    
    var tabla = document.getElementById("tableOperationControls");
    tabla.removeAttribute("hidden");
    
    initializeInputNumbersDataList(data);
    
    initializeColorList(colors, backColors, borderColors);
};
             
function initializeInputNumbersDataList(data)
{
    inputNumbersData.length = 0;
    
    inputNumbersData.push(document.getElementById('numberJanuary'));
    inputNumbersData.push(document.getElementById('numberFebruary'));
    inputNumbersData.push(document.getElementById('numberMarch'));
    inputNumbersData.push(document.getElementById('numberApril'));
    inputNumbersData.push(document.getElementById('numberMay'));
    inputNumbersData.push(document.getElementById('numberJune'));
    
    for (var i = 0; i < months.length; i++) {
        
        inputNumbersData[i].value =  data[i];
    }
}

function initializeColorList(colors, backColors, borderColors)
{
    colorPickers.length = 0;
    
    colorPickers.push(document.getElementById('colorPickerJanuary'));
    colorPickers.push(document.getElementById('colorPickerFebruary'));
    colorPickers.push(document.getElementById('colorPickerMarch'));
    colorPickers.push(document.getElementById('colorPickerApril'));
    colorPickers.push(document.getElementById('colorPickerMay'));
    colorPickers.push(document.getElementById('colorPickerJune'));
    
    for (var i = 0; i < months.length; i++) {
        
        mes = i;
        
        let color = colors[mes];
        
        let rgb = color.match(/\d+/g);
        
        colorPickers[i].value = fullColorHex(rgb[R], rgb[G], rgb[B]);
        
        inputNumbersData[mes].style.backgroundColor = backColors[mes];
        inputNumbersData[mes].style.borderColor = borderColors[mes];
    }
}

function crearGraficoBarras() {
    var chart = Chart.getChart('myChart');
      if (chart) {
        chart.config.type = 'bar';
        chart.update();
      }
     else{
          crearGraficoRandom('bar');
     }
};

function crearGraficoLinea() {
 var chart = Chart.getChart('myChart');
      if (chart) {
        chart.config.type = 'line';
        chart.update();
      }
     else{
          crearGraficoRandom('line');
     }
};

function crearGraficoTarta() {
  var chart = Chart.getChart('myChart');
      if (chart) {
        chart.config.type = 'pie';
        chart.update();
      }
     else{
          crearGraficoRandom('pie');
     }
};

function crearGraficoDonut() {
  var chart = Chart.getChart('myChart');
      if (chart) {
        chart.config.type = 'doughnut';
        chart.update();
      }
     else{
          crearGraficoRandom('doughnut');
     }
};

function crearGraficoAreaPolar() {
  var chart = Chart.getChart('myChart');
      if (chart) {
        chart.config.type = 'polarArea';
        chart.update();
      }
     else{
          crearGraficoRandom('polarArea');
     }
};

function crearGraficoBurbujas() {
  var chart = Chart.getChart('myChart');
      if (chart) {
        chart.config.type = 'scatter';
        chart.update();
      }
     else{
          crearGraficoRandom('scatter');
     }
};



function borrarGrafico() {
  var chart = Chart.getChart('myChart');
  if (chart) {
    chart.destroy();
  }else{
      alert('Pulse primero el botón crear gráfico para iniciar.');
 }
};

function addOne(mes) {
    
    let chart = Chart.getChart('myChart');
    let dataValue = 0;
    
    if (chart) {
        dataValue = chart.data.datasets[0].data[mes];
        dataValue += 1;
        chart.data.datasets[0].data[mes] = dataValue; 
        chart.update();
  }
    
  inputNumbersData[mes].value = dataValue;
   inputNumbersData[mes].update();
};

function substractOne(mes) {
    
    var chart = Chart.getChart('myChart');
    
    if (chart) {
        dataValue = chart.data.datasets[0].data[mes];
        dataValue -= 1;
        chart.data.datasets[0].data[mes] = dataValue; 
        chart.update();
  }
    
  inputNumbersData[mes].value = dataValue;
  inputNumbersData[mes].update();
};

function numberChanged(input, mes) {
    
    var chart = Chart.getChart('myChart');
    if (chart) {
        chart.data.datasets[0].data[mes] = input.value; 
        chart.update();
  }
}

function colorChanged(input, mes) {
    
    var chart = Chart.getChart('myChart');
    if (chart) {
        
        let hex = input.value;
        let rgb = hexToRgb(hex);
        
        let rgbaBack = 'rgba(' + rgb.r.toString() + ', ' +  rgb.g.toString() + ', ' + rgb.b.toString() + ', ' + opacityBack.toString() + ')';
        chart.data.datasets[0].backgroundColor[mes] = rgbaBack; 
        
        let rgbaBorder = 'rgba(' + rgb.r.toString() + ', ' +  rgb.g.toString() + ', ' + rgb.b.toString() + ', 1)';
        chart.data.datasets[0].borderColor[mes] = rgbaBorder; 
        
        chart.update();
        
        let className = getClassNameFromMes(mes);
    
        let elements = document.getElementsByClassName(className);
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = rgbaBack;
            elements[i].style.borderColor = rgbaBorder;
        }
        
        inputNumbersData[mes].style.backgroundColor = rgbaBack;
        inputNumbersData[mes].style.borderColor = rgbaBorder;
    }
};

function fullColorHex(r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#" + red + green + blue;
};

function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

function rgbListToRGBAString(rgbList, opacity)
{
    let colorRGBAList = [];
    
    for (var i = 0; i < rgbList.length; i++) {
        colorRGBAList.push(rgbToRGBAString(rgbList[i], opacity));
  }
    
  return colorRGBAList;    
}

function rgbToRGBAString(rgb, opacity){
    
    let colores = rgb.match(/\d+/g);

    let strRGBA = 'rgba(' + colores[R] + ', '  + colores[G] + ', ' + colores[B] + ' , ' + opacity.toString() + ')';
    
    if (colores) {
        strRGBA = 'rgba(' + colores[R] + ', '  + colores[G] + ', ' + colores[B] + ' , ' + opacity.toString() + ')';
    } else {
        console.log("La cadena proporcionada no es un color RGB válido");
    }
    
    return strRGBA;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

function getClassNameFromMes(mes)
{
    let mesName = '';

    switch(mes){
            
        case 0:
                mesName = 'btnJanuary';
            break;

        case 1:
                mesName = 'btnFebruary';
            break;

        case 2:
                mesName = 'btnMarch';
            break;

        case 3:
                mesName = 'btnApril';
            break;
            
        case 4:
                mesName = 'btnMay';
            break;
            
        case 5:
                mesName = 'btnJune';
            break;
                    
    }
    
    return mesName;
}

function generateRandomNumberList(count, min, max) {
  var data = [];
    
  for (var i = 0; i < count; i++) {
    var numero = Math.floor(Math.random() * max) + min;
    data.push(numero);
  }
  return data;
}