import React from "react";

import "./ForecastWeather.scss";

const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

function ForecastWeather({ data }) {
    console.log(data);
    const currentDay = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(currentDay, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, currentDay)
    );

    return (
        <div className="forecastweather">
            {data.list.slice(0, 7).map((item, idx) => (
                <div className="forecastweather__item">{forecastDays[idx]}</div>
            ))}
        </div>
    );
}

export default ForecastWeather;
