import React from "react";

import "./WeatherWidget.scss";

function WeatherWidget({ data }) {
    return (
        <>
            <div className="WeatherWidget backdrop-blur-md bg-black/50 mt-5 p-3 mx-auto text-white rounded-md">
                <div className="WeatherWidget__row">
                    <h1 className="text-4xl font-bold">{data.city}</h1>
                </div>
            </div>
            <div className="WeatherWidget backdrop-blur-md bg-black/50 mt-5 p-3 mx-auto text-white rounded-md">
                <div className="WeatherWidget__row">
                    <div className="text-2xl font-bold">
                        {data.weather[0].main}
                    </div>
                    <div className="text-1xl font-bold">
                        {data.weather[0].description}
                    </div>
                </div>
            </div>
            <div className="WeatherWidget backdrop-blur-md bg-black/50 mt-5 p-3 mx-auto text-white rounded-md">
                <div className="WeatherWidget__row1 flex justify-between items-center w-full">
                    <div className="text-5xl font-bold">
                        {Math.round(data.main.temp)} °C
                    </div>
                    <img
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt={`${data.weather[0].main}`}
                    />
                </div>
                <div className="WeatherWidget__row3 flex flex-col items-center mt-1">
                    <div className="WeatherWidget__row2--details w-full flex flex-row justify-between">
                        <span className="label">Humidity :</span>
                        <span className="value">
                            {Math.round(data.main.humidity)}%
                        </span>
                    </div>
                    <div className="WeatherWidget__row3--details w-full flex flex-row justify-between">
                        <span className="label">Wind :</span>
                        <span className="value">
                            {Math.round(data.wind.speed)} m/s
                        </span>
                    </div>
                    <div className="WeatherWidget__row3--details w-full flex flex-row justify-between">
                        <span className="label">Pressure :</span>
                        <span className="value">
                            {Math.round(data.main.pressure)} hPa
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherWidget;
