import { useState } from "react";
import "./App.scss";

import Search from "./Components/Search/Search";
import WeatherWidget from "./Components/WeatherWidget/WeatherWidget";
import ForecastWeather from "./Components/ForecastWeather/ForecastWeather";

import { CurrentWeatherApi, CurrentWeatherAPIURL } from "./api";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);

    const handleOnSearch = (handleSearch) => {
        const [lat, lon] = handleSearch.value.split(" ");

        const currentWeatherFetch = fetch(
            `${CurrentWeatherAPIURL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${CurrentWeatherApi}`
        );

        const forecastWeatherFetch = fetch(
            `${CurrentWeatherAPIURL}/forecast/?lat=${lat}&lon=${lon}&appid=${CurrentWeatherApi}`
        );

        Promise.all([currentWeatherFetch, forecastWeatherFetch])
            .then(async (reponse) => {
                const weatherResponse = await reponse[0].json();
                const forecastResponse = await reponse[1].json();

                setCurrentWeather({
                    city: handleSearch.label,
                    ...weatherResponse,
                });

                setForecastWeather({
                    city: handleSearch.label,
                    ...forecastResponse,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="App">
            <Search onSearchHandle={handleOnSearch} />
            {currentWeather && <WeatherWidget data={currentWeather} />}
            {/* {forecastWeather && <ForecastWeather data={forecastWeather} />} */}
        </div>
    );
}

export default App;
