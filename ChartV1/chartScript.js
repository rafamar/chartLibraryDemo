
window.onload = function() {
    
	//Obtenemos el elemento canva de la interfaz.
    let canva = document.getElementById('myChart').getContext('2d');
	
    //Configuramos el el gráfico utilizando el elemento canva para dibujarlo en él
	let myChart = new Chart(canva, {
    type: 'bar',
    data: {
      labels: ["Rusia", "Brasil", "Canadä", "EEUU", "China", "Resto del Mundo"],
      datasets: [
        {
          label: "Area Forestal",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#c7eb7a" ],
          data: [815, 497, 347,310,220, 1870]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Area forestal en millones de hectáreas en 2020'
      }
    }
});
};


  
  

