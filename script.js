const total = () => {
  console.log(123);
  let chartsLeft; 
  let rightList = [
  
  ]
  let leftList = [
  
  ]
  fetch('https://assetsviewapi-kc-webapi-dev.azurewebsites.net/api/PumpAndDump/v2/standart-deviation?interval=15&length=100')
      .then(response => response.json())
      .then(data => {
      
      leftList = data.highest
      rightList = data.lowest
      const left = document.querySelector('.left')
      const right = document.querySelector('.right')
      // chartsLeft = document.querySelectorAll('#chartsLeft')
    
      const creatingChartsLeft = () => {
        left.innerHTML = ''
          leftList.forEach((item, index) => {
              left.innerHTML += `
                  <div class="left_block">
                      <p class="left_block_name">${item.symbol}</p>
                      <p class="left_block_count">${item.pumpAndDump.deviationWeight}</p>
                      <div class="left_block_grade">
                          <canvas id="chartsLeft"></canvas>
                      </div>
                  </div>
              `
          })
          chartsLeft = document.querySelectorAll('#chartsLeft')
  
          chartsLeft.forEach((item, index) => {
              new Chart(item, {
                type: 'line',
                data: {
                    labels: ['', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '',],
                    datasets: [{
                    label: data.highest[index].symbol,
                    data: data.highest[index].pumpAndDump.closePrice,
                    borderColor: 'black',
                    borderWidth: 1,
                    pointStyle: false,
                    fill: true
                    }]
                },
                options: {
                    tickLength: 100,
                    scales: {
                    y: {
                        beginAtZero: false,
                        drawTicks: false,
                        display: true,
                        offset: false,
            
                    }
                    }
                }
              });
          })
      }
      const creatingChartsRight = () => {
        right.innerHTML = ''
          rightList.forEach((item, index) => {
              right.innerHTML += `
                  <div class="left_block">
                      <p class="left_block_name">${item.symbol}</p>
                      <p class="left_block_count">${item.pumpAndDump.deviationWeight}</p>
                      <div class="left_block_grade">
                          <canvas id="chartsRight"></canvas>
                      </div>
                  </div>
              `
          })
          chartsRight = document.querySelectorAll('#chartsRight')
  
          chartsRight.forEach((item, index) => {
              new Chart(item, {
                type: 'line',
                data: {
                    labels: ['', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '','', '',],
                    datasets: [{
                    label: data.highest[index].symbol,
                    data: data.highest[index].pumpAndDump.closePrice,
                    borderColor: 'black',
                    borderWidth: 1,
                    pointStyle: false,
                    fill: true
                    }]
                },
                options: {
                    tickLength: 100,
                    scales: {
                    y: {
                        beginAtZero: false,
                        drawTicks: false,
                        display: true,
                        offset: false,
            
                    }
                    }
                }
              });
          })
      }
      creatingChartsLeft()
      creatingChartsRight()
  })
  
  
}
total()
setInterval(total, 10000)

