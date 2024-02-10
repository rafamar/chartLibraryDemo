var myChart = null;

const ventaPorMeses = [12, 19, 3, 5, 8, 3];

const dataVentas = {
	  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
	  datasets: [{
		label: 'Ventas',
		data: ventaPorMeses,
		backgroundColor: [
		  'rgba(255, 99, 132, 0.2)',
		  'rgba(54, 162, 235, 0.2)',
		  'rgba(255, 206, 86, 0.2)',
		  'rgba(75, 192, 192, 0.2)',
		  'rgba(153, 102, 255, 0.2)',
		  'rgba(255, 159, 64, 0.2)'
		],
		borderColor: [
		  'rgba(255, 99, 132, 1)',
		  'rgba(54, 162, 235, 1)',
		  'rgba(255, 206, 86, 1)',
		  'rgba(75, 192, 192, 1)',
		  'rgba(153, 102, 255, 1)',
		  'rgba(255, 159, 64, 1)'
		],
		borderWidth: 1
	  }]
	};

function crearGraficoBarras() {

	if(myChart != null)
		myChart.destroy();
	
	let canva = document.getElementById('myChart').getContext('2d');
	
	  myChart = new Chart(canva, {
		type: 'bar',
		data: dataVentas,
		options: {
		  scales: {
			y: {
			  beginAtZero: true
			}
		  }
		}
	  });
	  
	  inicializaNumberControls();
}

function crearGraficoLinea() {
	
	if(myChart != null)
		myChart.destroy();
	
	let canva = document.getElementById('myChart').getContext('2d');
	
	myChart =  new Chart(canva, {
    type: 'line',
    data: dataVentas,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
   inicializaNumberControls(dataVentas);
}

function crearGraficoTarta() {

	if(myChart != null)
		myChart.destroy();
	
	let canva = document.getElementById('myChart').getContext('2d');
	
	myChart =  new Chart(canva, {
    type: 'pie',
    data: dataVentas,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  inicializaNumberControls(dataVentas);
}

function borrarGrafico(input, mes) {
    
    if(myChart != null) {
        myChart.destroy(); 
		myChart = null;
	}
	
	vaciaNumberControls();
};

function numberChanged(input, mes) {
    
    if(myChart != null) {
        myChart.data.datasets[0].data[mes] = input.value; 
        myChart.update();
	}
};

function inicializaNumberControls(){
	
	  let numberControlEnero = document.getElementById('numberEnero');
	  numberControlEnero.value = ventaPorMeses[0];
	  
	  let numberControlFebrero = document.getElementById('numberFebrero');
	  numberControlFebrero.value = ventaPorMeses[1];
	  
	  let numberControlMarzo = document.getElementById('numberMarzo');
	  numberControlMarzo.value = ventaPorMeses[2];
	  
	  let numberControlAbril = document.getElementById('numberAbril');
	  numberControlAbril.value = ventaPorMeses[3];
	  
	  let numberControlMayo = document.getElementById('numberMayo');
	  numberControlMayo.value = ventaPorMeses[4];
	  
	  let numberControlJunio = document.getElementById('numberJunio');
	  numberControlJunio.value = ventaPorMeses[5];
}

function vaciaNumberControls(){
	
	  let numberControlEnero = document.getElementById('numberEnero');
	  numberControlEnero.value = "";
	  
	  let numberControlFebrero = document.getElementById('numberFebrero');
	  numberControlFebrero.value = "";
	  
	  let numberControlMarzo = document.getElementById('numberMarzo');
	  numberControlMarzo.value = "";
	  
	  let numberControlAbril = document.getElementById('numberAbril');
	  numberControlAbril.value = "";
	  
	  let numberControlMayo = document.getElementById('numberMayo');
	  numberControlMayo.value = "";
	  
	  let numberControlJunio = document.getElementById('numberJunio');
	  numberControlJunio.value = "";
}
