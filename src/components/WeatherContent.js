import CurrentConditions from "./CurrentConditions";
import PerHourTable from "./PerHourTable";

function WeatherContent({ currentConditions, days, activeTabDay }) {
    //потом добавитть if(1й таб активен)=>{}
    return (
        <div className="weather_content_box">
            <div className="left_weather_content_box">
                {/* <div className="current_conditions">
                    <p>Current conditions:</p>
                    <div className="condition_img">
                        <img
                            src={currentConditions.condition.icon}
                            alt={currentConditions.condition.text}
                        />
                    </div>
                    <div className="current_temp">
                        {currentConditions.temp_c > 0
                            ? "+" + currentConditions.temp_c + "°C"
                            : currentConditions.temp_c + "°C"}
                    </div>
                    <div className="sun_rise-set">
                        <p>
                            <span>Sunrise: </span>
                            {days[0].astro.sunrise}
                        </p>
                        <p>
                            <span>Sunset: </span>
                            {days[0].astro.sunset}
                        </p>
                    </div>
                </div> */}
                <CurrentConditions
                    currentConditions={currentConditions}
                    days={days}
                    activeTabDay={activeTabDay}
                />
                <div className="titles">
                    <p className="temp_title">Temperature,°C</p>
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
