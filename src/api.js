export const geoDataAPIOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
};

export const geoDataAPIHost = "wft-geo-db.p.rapidapi.com";

export const geoDataAPIURL = "https://wft-geo-db.p.rapidapi.com/v1/geo/";

export const CurrentWeatherApi = process.env.REACT_APP_WEATHER_KEY;

export const CurrentWeatherAPIURL = "https://api.openweathermap.org/data/2.5";
