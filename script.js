let userData = {
    time: 3,
    count: 100,
}

const raw = localStorage.getItem('user')
if(raw) {
    const person = JSON.parse(raw)
    userData = person
}


const writing = () => {
    localStorage.clear()
    localStorage.setItem('user', JSON.stringify(userData))
    shower()
}

const object = {
    reload: document.querySelector('#reload'),
    item1: document.querySelector('#item1'),
    item2: document.querySelector('#item2'),
    table2: document.querySelector('#table2'),
    table1: document.querySelector('#table1'),
    place: document.querySelector('.place'),

    min3: document.querySelector('#answer1'),
    min15: document.querySelector('#answer2'),
    min60: document.querySelector('#answer3'),
    min240: document.querySelector('#answer4'),
    min1440: document.querySelector('#answer5'),
    
    
    times100: document.querySelector('#answer6'),
    times200: document.querySelector('#answer7'),
    times300: document.querySelector('#answer8'),
    times500: document.querySelector('#answer9'),

    check3: document.querySelector('.imgs1'),

    shower1: document.querySelector('.shower_p1'),
    shower2: document.querySelector('.shower_p2'),

}

const shower = () => {
    let time = 0
    let type = ''
    if(userData.time == 3 || userData.time == 15) {
        type = 'min'
    }
    if(userData.time == 60) {
        type = 'hour'
    }
    if(userData.time == 240 || userData.time == 1440) {
        type = 'hours'
    }


    switch(userData.time) {
        case 3:
            time = 3
            break;
        case 15: 
            time = 15
            break;
        case 60:
            time = 1
            break;
        case 240: 
            time = 4
            break;
        case 1440: 
            time = 24
            break;
    }
    object.shower1.innerHTML = `${time} ${type}`
    object.shower2.innerHTML = `${userData.count}`
}
shower()

const creatingCheck = () => {

}
let count = []
const total = () => {
    count = []
    for(let i = 0; i < userData.count; i++) {
        count.push('')
    }
  let chartsLeft; 
  let rightList = [
  
  ]
  let leftList = [
  
  ]
  fetch(`https://assetsviewapi-kc-webapi-dev.azurewebsites.net/api/PumpAndDump/v2/standart-deviation?interval=${userData.time}&length=${userData.count}`)
      .then(response => response.json())
      .then(data => {
      console.log(data)
      leftList = data.highest
      rightList = data.lowest
      const left = document.querySelector('.left')
      const right = document.querySelector('.right')
      chartsLeft = document.querySelectorAll('#chartsLeft')
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
                    labels: count,
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
                    labels: count,
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
setInterval(total, 1000000)




let reloadIndex = true
const show1 = () => {
    object.table1.classList.remove('none2')
    object.place.classList.remove('none2')
}
const show2 = () => {
    object.table2.classList.remove('none2')
    object.place.classList.remove('none2')
}
const hideAll = () => {
    object.table2.classList.add('none2')
    object.table1.classList.add('none2')
    object.place.classList.add('none2')
}
object.reload.addEventListener('click', () => {
    if(reloadIndex) {
        total()
        reloadIndex = false
        setTimeout(() => {
            reloadIndex = true
        }, 3000);
    }
})
object.item1.addEventListener('click', () => {
    hideAll()
    show1()
})
object.item2.addEventListener('click', () => {
    hideAll()
    show2()
})
object.place.addEventListener('click', () => {
    hideAll()
})


object.min3.addEventListener('click', (item) => {
    userData.time = 3
    writing()
    total()
    setTimeout(() => {
        hideAll()
    }, 150);
})
object.min15.addEventListener('click', (item) => {
    userData.time = 15
    writing()
    total()
    setTimeout(() => {
        hideAll()
    }, 150);
})
object.min60.addEventListener('click', (item) => {
    userData.time = 60
    writing()
    total()
    setTimeout(() => {
        hideAll()
    }, 150);
})
object.min240.addEventListener('click', (item) => {
    userData.time = 240
    writing()
    total()
    setTimeout(() => {
        hideAll()
    }, 150);
})
object.min1440.addEventListener('click', (item) => {
    userData.time = 1440
    writing()
    total()
    setTimeout(() => {
        hideAll()
    }, 150);
})


object.times100.addEventListener('click', (item) => {
    userData.count = 100
    writing()
    total()
    setTimeout(() => {
        hideAll()
    }, 150);
})
object.times200.addEventListener('click', (item) => {
    userData.count = 200
    writing()
    total()
    setTimeout(() => {
        hideAll()
    }, 150);
})
object.times300.addEventListener('click', (item) => {
    userData.count = 300
    writing()
    total()
    setTimeout(() => {
        hideAll()
    }, 150);
})
object.times500.addEventListener('click', (item) => {
    userData.count = 500
    writing()
    total()
    setTimeout(() => {
        hideAll()
    }, 150);
})


