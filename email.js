fetch('https://api.open-meteo.com/v1/forecast?latitude=33.6844&longitude=73.0479&current=temperature_2m,wind_speed_10m')
  .then(res => res.json())
  .then(data => {
    console.log("Temperature:", data.current.temperature_2m);
    console.log("Wind Speed:", data.current.wind_speed_10m);
  })
  .catch(err => console.log(err));