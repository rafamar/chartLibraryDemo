/*//////////////////////////////////////////////////////
//                                                    //
//                CONSTANTES                          //
//                    Y                               //
//             VARIABLES COMUNES                      //                                                   //
//                                                    //
//////////////////////////////////////////////////////*/
const BARRAS = 'bar';
const LINEA = 'line';
const TARTA = 'pie';
const DONUT = 'doughnut';
const AREA_POLAR = 'polarArea';
const BURBUJAS = 'bubble';

const CHART = 'myChart';

const TITLE = 'Ventas';

const ENERO = 'Enero';
const FEBRERO = 'Febrero';
const MARZO = 'Marzo';
const ABRIL = 'Abril';
const MAYO = 'Mayo';
const JUNIO = 'Junio';

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

const BLACK = '#000000';

const meses = [ENERO, FEBRERO, MARZO, ABRIL, MAYO, JUNIO];
const months = [JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE];

var opacityBack = 0.2;

var myChart = null;


/*//////////////////////////////////////////////////////
//                                                    //
//          FUNCIONES DE CREACIÖN                     //
//                                                    //
//                                                    //
///////////////////////////////////////////////////////*/

function crearGraficoBarras() {
	
	 crearGraficoPorTipo(BARRAS);
};

function crearGraficoLinea() {
	
	 crearGraficoPorTipo(LINEA);
};

function crearGraficoTarta() {
	
	 crearGraficoPorTipo(TARTA);
};

function crearGraficoDonut() {
	
	 crearGraficoPorTipo(DONUT);
};

function crearGraficoAreaPolar() {
	
	 crearGraficoPorTipo(AREA_POLAR);
};

function crearGraficoBurbujas() {
	
	crearGraficoPorTipo(BURBUJAS);
};

function crearGraficoPorTipo(tipo){

      if (myChart != null) {
		  
        myChart.config.type = tipo;
        myChart.update();
      }
     else{
		 
          let data = generateRandomNumberList(6, 1, 20);
		    crearGrafico(tipo, data);
     }
};

function crearGrafico(tipo, data) {

  let ctx = document.getElementById(CHART).getContext('2d');
  let colors = ['rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'];

  let backColors = rgbListToRGBAString(colors, opacityBack);
  let borderColors = rgbListToRGBAString(colors, 1);

  myChart = new Chart(ctx, {
    type: tipo,
    data: {
      labels: meses,
      datasets: [{
        label: TITLE,
        data: data,
        backgroundColor: backColors,
        borderColor: borderColors,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          display: true,
          ticks: {
              beginAtZero: true
          }
      }]
      }
    }
  });
  
      
    var tabla = document.getElementById("tableOperationControls");
	
	if(tabla == null){
		
		console.log('Se ha producido un NULL al recoger la tabla de Control de Operaciones');
	}
	else{
		tabla.removeAttribute("hidden");
	}
    
    initializeInputNumbersData(data);
    
    initializeColorList(colors, backColors, borderColors);
};


/*//////////////////////////////////////////////////////
//                                                    //
//          FUNCIONES DE DESTRUCCIÓN                  //
//                                                    //
//                                                    //
///////////////////////////////////////////////////////*/

function borrarGrafico() {
	
  if (myChart != null) {
    
    myChart.destroy();
    myChart = null;
	
	vaciaValorColorPickers();
	
  }else{
      alert('Pulse primero el botón crear gráfico para iniciar.');
 }
};

/*//////////////////////////////////////////////////////
//                                                    //
//                    EVENTOS.                        //
//			OPERACIONES Y CONFIGURACIONES             //
//                                                    //
///////////////////////////////////////////////////////*/

function addOne(mes) {
    
	increasing = 1;
	
    increaseMonthNumber(mes, increasing);
};

function substractOne(mes) {
    
	increasing = -1;
	
    increaseMonthNumber(mes, increasing);
};

function numberChanged(input, mes) {
    
    if (myChart != null) {
		
        myChart.data.datasets[0].data[mes] = input.value; 
        myChart.update();
	}
};

function colorChanged(input, mes) {
    
    if (myChart != null) {
        
        let hex = input.value;
        let rgb = hexToRgb(hex);
        
        let rgbaBack = 'rgba(' + rgb.r.toString() + ', ' +  rgb.g.toString() + ', ' + rgb.b.toString() + ', ' + opacityBack.toString() + ')';
        chart.data.datasets[0].backgroundColor[mes] = rgbaBack; 
        
        let rgbaBorder = 'rgba(' + rgb.r.toString() + ', ' +  rgb.g.toString() + ', ' + rgb.b.toString() + ', 1)';
        chart.data.datasets[0].borderColor[mes] = rgbaBorder; 
        
        chart.update();
        
		let mesNombre = meses[mes];
		
		coloreaBtnOperation(mesNombre, true, rgbaBack, rgbaBorder);
		
		coloreaBtnOperation(mesNombre, false, rgbaBack, rgbaBorder);
		
		coloreaNumberControl(mesNombre, rgbaBack, rgbaBorder);
    }
};


/*//////////////////////////////////////////////////////
//                                                    //
//          FUNCIONES DE INICIALIZACION               //
//                                                    //
//                                                    //
///////////////////////////////////////////////////////*/

function initializeInputNumbersData(data)
{
	for( i = 0; i < meses.length; i++){
		
		let mesNombre = meses[i];
		
		let numberControl = getNumberControlByMonthName(mesNombre);
		
		if(numberControl === null){
			
			console.log('Se ha producido un NULL al recoger el control numérico del mes de ' + mesNombre);
		}else{
			
			numberControl.value = data[i];
		}
	}
};

function initializeColorList(colors, backColors, borderColors)
{
	for(i = 0; i < meses.length; i++){
		
		let mes = i;
		
		asignaValorColorPicker(colors, mes);
			
		let mesNombre = meses[mes];
		
		coloreaBtnOperation(mesNombre, true, backColors[mes], borderColors[mes]);
	
		coloreaBtnOperation(mesNombre, false, backColors[mes], borderColors[mes]);

		coloreaNumberControl(mesNombre, backColors[mes], borderColors[mes]);
	}
};


/*//////////////////////////////////////////////////////
//                                                    //
//          FUNCIONES DE CONVERSIÖN                   //
//                 DE COLOR                           //
//                                                    //
///////////////////////////////////////////////////////*/

function fullColorHex(rgb) {

  let colores = rgb.match(/\d+/g);
  
  var red = rgbToHex(colores[R]);
  var green = rgbToHex(colores[G]);
  var blue = rgbToHex(colores[B]);
  
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
};

function rgbToRGBAString(rgb, opacity){
    
    let colores = rgb.match(/\d+/g);

    let strRGBA = 'rgba(' + colores[R] + ', '  + colores[G] + ', ' + colores[B] + ' , ' + opacity.toString() + ')';
    
    if (colores) {
        strRGBA = 'rgba(' + colores[R] + ', '  + colores[G] + ', ' + colores[B] + ' , ' + opacity.toString() + ')';
    } else {
        console.log("La cadena proporcionada no es un color RGB válido");
    }
    
    return strRGBA;
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/*//////////////////////////////////////////////////////
//                                                    //
//          		UTILES                            //
//                                                    //
///////////////////////////////////////////////////////*/

function getBtnByMonthName(mesNombre, isAdd)
{
	let operation = isAdd? 'Add' : 'Substract';
	
	let idButton = 'btn' + mesNombre + operation;
    
    let operationButton = document.getElementById(idButton);
        
	return operationButton;
};

function getNumberControlByMonthName(mesNombre)
{
	let idNumber = 'number' + mesNombre;
    
    let numberControl = document.getElementById(idNumber);
        
	return numberControl;
};

function vaciaValorColorPickers(){

	for(i = 0; i < meses.length; i++){
		
		let mes = i;
		
		let mesNombre = meses[mes];
		
		vaciaValorColorPicker(mesNombre);
	}
}

function vaciaValorColorPicker(mesNombre){

	let asignado = false;
	
	let colorPickerMes = getColorPickerByMonthName(mesNombre);
	
	if(colorPickerMes === null){

		console.log('Se ha producido un NULL al recoger el control colorPicker del mes de ' + mesNombre);
		
		asignado = false;
	}else{
		
		colorPickerMes.value = BLACK;
		
		asignado = true;
	}
	
	return asignado;
}

function asignaValorColorPicker(colors, mes){
	
	let asignado = false;
	
	let mesNombre = meses[mes];
	
	let colorPickerMes = getColorPickerByMonthName(mesNombre);
	
	if(colorPickerMes === null){

		console.log('Se ha producido un NULL al recoger el control colorPicker del mes de ' + mesNombre);
		
		asignado = false;
	}else{
		
		let rgb = colors[mes];
		
		let hexColor = fullColorHex(rgb);

		colorPickerMes.value = hexColor;
		
		asignado = true;
	}
	
	return asignado;
}

function getColorPickerByMonthName(mesNombre)
{
	let idPicker = 'colorPicker' + mesNombre;
    
    let colorPicker = document.getElementById(idPicker);
        
	return colorPicker;
};

function coloreaBtnOperation(mesNombre, isAdd, rgbaBack, rgbaBorder){
	
	let btnOperation = getBtnByMonthName(mesNombre, isAdd);
		
	if(btnOperation === null){
		
		console.log('Se ha producido un NULL al recoger el botón de Operaciones del mes de ' + mesNombre);
	}else{
	
		btnOperation.style.backgroundColor = rgbaBack;
		btnOperation.style.borderColor = rgbaBorder;
	}
}

function coloreaNumberControl(mesNombre, rgbaBack, rgbaBorder){

	let numberControl = getNumberControlByMonthName(mesNombre);
	
	if(numberControl === null){
		
		console.log('Se ha producido un NULL al recoger el control numérico del mes de ' + mesNombre);
	}else{
		
		numberControl.style.backgroundColor = rgbaBack;
		numberControl.style.borderColor = rgbaBorder;
	}
}

function increaseMonthNumber(mes, increasing){
	
    let dataValue = 0;
	
    if (myChart != null) {
		
        dataValue = myChart.data.datasets[0].data[mes];
        dataValue += increasing;
        myChart.data.datasets[0].data[mes] = dataValue; 
        myChart.update();
		
		let mesNombre = meses[mes];
	
		let numberText = getNumberControlByMonthName(mesNombre);
	
		numberText.value = dataValue;
	}
}

function generateRandomNumberList(count, min, max) {
  var data = [];
    
  for (var i = 0; i < count; i++) {
    var numero = Math.floor(Math.random() * max) + min;
    data.push(numero);
  }
  return data;
};