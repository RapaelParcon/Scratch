const apiKey = "f320a03bb8dfdbcf60db37acd151ba19";
const city = "Tarlac";

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        document.getElementById("weather-box").innerHTML = `
            <h3 style="color:#39ff14;">${data.name}</h3>
            <p>Temperature: <strong>${data.main.temp}°C</strong></p>
            <p>Weather: <strong>${data.weather[0].description}</strong></p>
            <p>Humidity: <strong>${data.main.humidity}%</strong></p>
        `;
    } catch (error) {
        document.getElementById("weather-box").innerHTML =
            "<p style='color:red;'>Failed to load weather data.</p>";
    }
}

getWeather();
