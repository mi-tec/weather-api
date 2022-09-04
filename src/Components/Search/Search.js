import React, { useState } from "react";

import "./Search.scss";

import { AsyncPaginate } from "react-select-async-paginate";
import { geoDataAPIOptions, geoDataAPIURL } from "../../api";

console.log(geoDataAPIOptions);

function Search({ onSearchHandle }) {
    const [search, setSearch] = useState(null);

    const loadOptions = async (value) => {
        try {
            const response = await fetch(
                `${geoDataAPIURL}cities?minPopulation=1000&namePrefix=${value}`,
                geoDataAPIOptions
            );
            const response_1 = await response.json();
            return {
                options: response_1.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        } catch (err) {
            return console.error(err);
        }
    };

    const setValue = (Data) => {
        setSearch(Data);
        onSearchHandle(Data);
    };

    return (
        <div className="search pt-5">
            <AsyncPaginate
                debounceTimeout={600}
                value={search}
                loadOptions={loadOptions}
                onChange={setValue}
                placeholder="Search by City"
            />
        </div>
    );
}

export default Search;
