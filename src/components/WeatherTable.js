import TabsDays from "./TabsDays";
import WeatherContent from "./WeatherContent";
import "./WeatherTable.css";

function WeatherTable({
    currentConditions,
    days,
    activeTabDay,
    setActiveTabDay,
}) {
    // console.log(days);
    return (
        <div className="weather-table">
            <TabsDays
                days={days}
                activeTabDay={activeTabDay}
                setActiveTabDay={setActiveTabDay}
            />

            <WeatherContent
                currentConditions={currentConditions}
                days={days}
                activeTabDay={activeTabDay}
            />
        </div>
    );
}

export default WeatherTable;
