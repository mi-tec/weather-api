import { useState } from "react";
import "./App.scss";

import Search from "./Components/Search/Search";
import WeatherWidget from "./Components/WeatherWidget/WeatherWidget";

import { CurrentWeatherApi, CurrentWeatherAPIURL } from "./api";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);

    const handleOnSearch = (handleSearch) => {
        const [lat, lon] = handleSearch.value.split(" ");
        const [city, code] = handleSearch.label.split(",");

        //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

        const currentWeatherFetch = fetch(
            `${CurrentWeatherAPIURL}?lat=${lat}&lon=${lon}&units=metric&appid=${CurrentWeatherApi}`
        );

        console.log(
            `${CurrentWeatherAPIURL}?lat=${lat}&lon=${lon}&appid=${CurrentWeatherApi}`
        );

        Promise.all([currentWeatherFetch])
            .then(async (reponse) => {
                const weatherResponse = await reponse[0].json();

                setCurrentWeather({
                    city: handleSearch.label,
                    ...weatherResponse,
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
        </div>
    );
}

export default App;
