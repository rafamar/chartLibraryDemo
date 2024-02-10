window.onload = function() {
    
        let chart = document.getElementById('myChart').getContext('2d');

        let myChart = new Chart(chart, {
        type: 'pie',
        data: {
          labels: ["Rusia", "Brasil", "Canadä", "EEUU", "China", "Resto del Mundo"],
          datasets: [
            {
              label: "Area Forestal",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#c7eb7a" ],
              data: [20, 12, 9,8,5, 46]
            }
          ]
        },
        options: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Area forestal % sobre el total mundial en 2020'
          }
        }
    });
};
