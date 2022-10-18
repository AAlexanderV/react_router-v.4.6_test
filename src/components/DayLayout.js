function DayLayout({ index, day, activeTabDay, setActiveTabDay }) {
    const daysMap = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    };

    return (
        <div
            className={"tab_day" + (index === activeTabDay ? " active" : "")}
            data-index={index}
            onClick={(e) => {
                setActiveTabDay(Number(e.target.dataset.index));
            }}
        >
            <div
                className="day_name"
                data-index={index}
            >
                {daysMap[new Date(day.date).getDay()]}
            </div>
            <div
                className="date"
                data-index={index}
            >
                {day.date.substring(day.date.length - 2)}
            </div>
            <div
                className="month"
                data-index={index}
            >
                {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                    new Date(day.date)
                )}
            </div>
            <div
                className="tab_day_condition_img"
                data-index={index}
            >
                <img
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                    data-index={index}
                />
            </div>
            <div
                className="max-min_temperature"
                data-index={index}
            >
                <div
                    className="min_temp"
                    data-index={index}
                >
                    <p data-index={index}>min.</p>
                    <h3 data-index={index}>
                        {day.day.mintemp_c > 0
                            ? "+" + Math.round(day.day.mintemp_c) + "°"
                            : Math.round(day.day.mintemp_c) + "°"}
                    </h3>
                </div>
                <span data-index={index}></span>
                <div
                    className="max_temp"
                    data-index={index}
                >
                    <p data-index={index}>max.</p>
                    <h3 data-index={index}>
                        {day.day.maxtemp_c > 0
                            ? "+" + Math.round(day.day.maxtemp_c) + "°"
                            : Math.round(day.day.maxtemp_c) + "°"}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default DayLayout;
