
fetch('https://assetsviewapi-kc-webapi-dev.azurewebsites.net/api/PumpAndDump/v2/standart-deviation?interval=15&length=100')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    
})

