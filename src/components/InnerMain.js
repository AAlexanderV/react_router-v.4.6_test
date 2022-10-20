import WeatherTable from "./WeatherTable";
// import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";

function InnerMain({
    isLoaded,
    error,
    weatherData,
    activeTabDay,
    setActiveTabDay,
}) {
    if (isLoaded && !error) {
        return (
            <WeatherTable
                currentConditions={weatherData.current}
                days={weatherData.forecast.forecastday}
                activeTabDay={activeTabDay}
                setActiveTabDay={setActiveTabDay}
            />
        );
    }
}

export default InnerMain;
