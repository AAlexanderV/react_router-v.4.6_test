function CurrentConditions({ currentConditions, days, activeTabDay }) {
    const daysMap = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    };

    if (activeTabDay === 0) {
        return (
            <div className="current_conditions">
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
                        {days[activeTabDay].astro.sunrise}
                    </p>
                    <p>
                        <span>Sunset: </span>
                        {days[activeTabDay].astro.sunset}
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="current_conditions">
                <div className="chosen_day_name">
                    {daysMap[new Date(days[activeTabDay].date).getDay()]}
                </div>
                <div className="chosen_date">
                    {days[activeTabDay].date.substring(
                        days[activeTabDay].date.length - 2
                    )}
                </div>
                <div className="chosen_month">
                    {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                        new Date(days[activeTabDay].date)
                    )}
                </div>

                <div className="sun_rise-set">
                    <p>
                        <span>Sunrise: </span>
                        {days[activeTabDay].astro.sunrise}
                    </p>
                    <p>
                        <span>Sunset: </span>
                        {days[activeTabDay].astro.sunset}
                    </p>
                </div>
            </div>
        );
    }
}

export default CurrentConditions;
