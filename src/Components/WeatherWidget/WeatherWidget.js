import React from "react";

import "./WeatherWidget.scss";

function WeatherWidget({ data }) {
    console.log(data);
    return (
        <div className="WeatherWidget backdrop-blur-md bg-black/50 mt-5 p-3 w-80 mx-auto text-white">
            <div className="WeatherWidget__row1 flex text-center w-3/4 mx-auto">
                <h1 className="text-4xl font-bold">{data.city}</h1>
            </div>
            <div className="WeatherWidget__row2 flex justify-between items-center w-full mt-5">
                <div className="text-5xl font-bold">
                    {Math.round(data.main.temp)} °C
                </div>
                <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={`${data.weather[0].main}`}
                />
            </div>
            <div className="WeatherWidget__row3 flex flex-col items-center mt-1">
                <div className="WeatherWidget__row3--details w-1/2 flex flex-row justify-between">
                    <span className="label">Humidity :</span>
                    <span className="value">
                        {Math.round(data.main.humidity)}%
                    </span>
                </div>
                <div className="WeatherWidget__row3--details w-1/2 flex flex-row justify-between">
                    <span className="label">Wind :</span>
                    <span className="value">
                        {Math.round(data.wind.speed)} m/s
                    </span>
                </div>
                <div className="WeatherWidget__row3--details w-1/2 flex flex-row justify-between">
                    <span className="label">Pressure :</span>
                    <span className="value">
                        {Math.round(data.main.pressure)} hPa
                    </span>
                </div>
            </div>
        </div>
    );
}

export default WeatherWidget;
