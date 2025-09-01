async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "5466c912cc225c03a96ca323d3ba0b58"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    document.getElementById("result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temp: ${data.main.temp} °C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}