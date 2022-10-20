import { useState, useEffect } from "react";
import "./App.css";

import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";
import InnerMain from "./components/InnerMain";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    }, [city, API]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div className="header">
                    <HeaderTop
                        setCity={setCity}
                        setIsLoaded={setIsLoaded}
                    />
                    <HeaderBottom
                        isLoaded={isLoaded}
                        error={error}
                        weatherData={weatherData}
                    />
                </div>
            ),

            children: [
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/",
                    element: (
                        <InnerMain
                            activeTabDay={activeTabDay}
                            setActiveTabDay={setActiveTabDay}
                            isLoaded={isLoaded}
                            error={error}
                            weatherData={weatherData}
                        />
                    ),
                },
            ],
        },
        // {
        //     path: "/about",
        //     element: <About />,
        // },
    ]);

    console.log(weatherData);

    return (
        <>
            {/* <div className="header">
                <HeaderTop
                    setCity={setCity}
                    setIsLoaded={setIsLoaded}
                />
                <HeaderBottom
                    isLoaded={isLoaded}
                    error={error}
                    weatherData={weatherData}
                />
            </div> */}

            <RouterProvider router={router} />
        </>
    );
}

export default App;
