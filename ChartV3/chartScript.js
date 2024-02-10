
var myChart = null;

// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Rusia", "Brasil", "Canadä", "EEUU", "China", "Resto del Mundo"];

// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosSuperficieForestalPorcentaje = {
          label: "Area Forestal",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#c7eb7a"],
          data: [20, 12, 9,8,5, 46]
        };
 
 function crearGraficoBarras()
{
    //Si existe el gráfico previamente lo eliminamos
    
	if(myChart != null)
		myChart.destroy();
	
    //Obtenemos el elemento canva de la interfaz.
    
	let canva = document.getElementById('myChart').getContext('2d');
	
	myChart = new Chart(canva, {
    type: 'bar',
    data: {
      labels: etiquetas,
      datasets: [ 
			datosSuperficieForestalPorcentaje
      ]
    },
	options: {
		
      legend: { display: true },
	  
      title: {
        display: true,
        text: 'Area forestal % sobre el total mundial en 2020'
      },
	  
	  scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
      }
    }
  });
};

function crearGraficoTarta()
{
	if(myChart != null)
		myChart.destroy();
	
	let canva = document.getElementById('myChart').getContext('2d');
	
	myChart = new Chart(canva, {
    type: 'pie',
    data: {
      labels: etiquetas,
      datasets: [ 
			datosSuperficieForestalPorcentaje
      ]
    },
	options: {
		
      legend: { display: true },
	  
      title: {
        display: true,
        text: 'Area forestal % sobre el total mundial en 2020'
      },
	  
	  scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
      }
    }
  });
};

function crearGraficoLinea()
{
	if(myChart != null)
		myChart.destroy();
	
	let canva = document.getElementById('myChart').getContext('2d');
	
	myChart = new Chart(canva, {
    type: 'line',
    data: {
      labels: etiquetas,
      datasets: [ 
			datosSuperficieForestalPorcentaje
      ]
    },
	options: {
		
      legend: { display: true },
	  
      title: {
        display: true,
        text: 'Area forestal % sobre el total mundial en 2020'
      },
	  
	  scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
      }
    }
  });
};


