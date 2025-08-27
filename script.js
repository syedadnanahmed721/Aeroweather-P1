const apiKey = "3226b65f6bfe3354fb81328df45aaeec"; // Replace with your OpenWeather API key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>🌡 Temperature: ${data.main.temp} °C</p>
                    <p>☁ Weather: ${data.weather[0].description}</p>
                    <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                `;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p>City not found!</p>`;
            }
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p>Error fetching data!</p>`;
        });
}