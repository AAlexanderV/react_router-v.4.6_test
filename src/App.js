import { useState, useEffect } from "react";
import "./App.css";
import WeatherTable from "./components/WeatherTable";
import HeaderTop from "./components/HeaderTop";

function App() {
    const [city, setCity] = useState("London");
    // const [days, setDays] = useState(7);
    const [activeTabDay, setActiveTabDay] = useState(0);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weatherData, setweatherData] = useState([]);

    const API = `https://api.weatherapi.com/v1/forecast.json?key=db5e238602fb4f4ba9a150153221610&q=${city}&days=${7}&aqi=no&alerts=no`;

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (!result.error) {
                        setError("");
                        setweatherData(result);
                    }
                    if (result.error) {
                        setError(result);
                    }
                },
                (e) => {
                    console.log("result ERROR");
                    setIsLoaded(true);
                    setError(e);
                }
            );
        // }, [city, days]);
    }, [city, API]);

    console.log(weatherData);

    if (error) {
        return (
            <>
                <div className="header">
                    <HeaderTop
                        setCity={setCity}
                        setIsLoaded={setIsLoaded}
                    />
                    <div className="header_bottom">
                        <p>
                            {error.message} Please check the correct spelling of
                            the city.
                        </p>
                    </div>
                </div>
            </>
        );
    } else if (!isLoaded) {
        return (
            <>
                <div className="header">
                    <HeaderTop
                        setCity={setCity}
                        setIsLoaded={setIsLoaded}
                    />
                    <div className="header_bottom">
                        <p>Loading...</p>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="header">
                    <HeaderTop
                        setCity={setCity}
                        setIsLoaded={setIsLoaded}
                    />
                    <div className="header_bottom">
                        <p>
                            Weather in{" "}
                            <strong>
                                {isLoaded && weatherData.location.name}
                            </strong>
                        </p>
                    </div>
                </div>

                <WeatherTable
                    currentConditions={weatherData.current}
                    days={weatherData.forecast.forecastday}
                    activeTabDay={activeTabDay}
                    setActiveTabDay={setActiveTabDay}
                />
            </>
        );
    }
}

export default App;
