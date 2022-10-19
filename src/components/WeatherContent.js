import CurrentConditions from "./CurrentConditions";
import PerHourTable from "./PerHourTable";

function WeatherContent({ currentConditions, days, activeTabDay }) {
    return (
        <div className="weather_content_box">
            <div className="left_weather_content_box">
                <CurrentConditions
                    currentConditions={currentConditions}
                    days={days}
                    activeTabDay={activeTabDay}
                />
                <div className="titles">
                    <p className="temp_title">Temp.,°C</p>
                    <p className="feels_title">Feels like</p>
                    <p className="wind_title">Wind, m/s</p>
                    <p className="rain_title">
                        Rain <br />
                        probability
                    </p>
                    <p className="snow_title">
                        Snow <br />
                        probability
                    </p>
                </div>
            </div>

            <PerHourTable
                days={days}
                activeTabDay={activeTabDay}
            />
        </div>
    );
}

export default WeatherContent;
