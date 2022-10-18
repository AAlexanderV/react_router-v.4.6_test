import "./PerHourTable.css";

function PerHourTable({ days, activeTabDay }) {
    const hoursMap = [0, 3, 6, 9, 12, 15, 18, 21];

    const renderHours = () => {
        return hoursMap.map((hour) => {
            return (
                <th
                    className={
                        hour === 3 || hour === 9 || hour === 15
                            ? "border_right"
                            : ""
                    }
                >
                    {hour + " :00"}
                </th>
            );
        });
    };

    const getIcon = () => {
        return hoursMap.map((hour) => {
            return (
                <td
                    className={
                        hour === 3 || hour === 9 || hour === 15
                            ? "border_right"
                            : ""
                    }
                >
                    <img
                        src={days[activeTabDay].hour[hour].condition.icon}
                        alt={days[activeTabDay].hour[hour].condition.text}
                    ></img>
                </td>
            );
        });
    };

    const perHourTemp = () => {
        return hoursMap.map((hour) => {
            return (
                <td
                    className={
                        hour === 3 || hour === 9 || hour === 15
                            ? "border_right"
                            : ""
                    }
                >
                    {days[activeTabDay].hour[hour].temp_c > 0
                        ? "+" + days[activeTabDay].hour[hour].temp_c + "°"
                        : days[activeTabDay].hour[hour].temp_c + "°"}
                </td>
            );
        });
    };
    const perHourFeelsLike = () => {
        return hoursMap.map((hour) => {
            return (
                <td
                    className={
                        hour === 3 || hour === 9 || hour === 15
                            ? "border_right"
                            : ""
                    }
                >
                    {days[activeTabDay].hour[hour].feelslike_c > 0
                        ? "+" + days[activeTabDay].hour[hour].feelslike_c + "°"
                        : days[activeTabDay].hour[hour].feelslike_c + "°"}
                </td>
            );
        });
    };

    const windSpeed = () => {
        return hoursMap.map((hour) => {
            return (
                <td
                    className={
                        hour === 3 || hour === 9 || hour === 15
                            ? "border_right"
                            : ""
                    }
                >
                    {days[activeTabDay].hour[hour].wind_kph}
                </td>
            );
        });
    };

    const rainChance = () => {
        return hoursMap.map((hour) => {
            return (
                <td
                    className={
                        hour === 3 || hour === 9 || hour === 15
                            ? "border_right"
                            : ""
                    }
                >
                    {days[activeTabDay].hour[hour].chance_of_rain + "%"}
                </td>
            );
        });
    };

    const snowChance = () => {
        return hoursMap.map((hour) => {
            return (
                <td
                    className={
                        hour === 3 || hour === 9 || hour === 15
                            ? "border_right"
                            : ""
                    }
                >
                    {days[activeTabDay].hour[hour].chance_of_snow + "%"}
                </td>
            );
        });
    };

    return (
        <table className="perHour_table">
            <tbody>
                <tr className="part_of_day">
                    <th className="border_right">night</th>
                    <th className="border_right">morning</th>
                    <th className="border_right">day</th>
                    <th>evening</th>
                </tr>

                <tr className="time">{renderHours()}</tr>

                <tr className="icons">{getIcon()}</tr>

                <tr className="perHour_temperature">{perHourTemp()}</tr>

                <tr className="perHour_feelsLike">{perHourFeelsLike()}</tr>

                <tr className="perHour_wind">{windSpeed()}</tr>

                <tr className="rain_chance">{rainChance()}</tr>

                <tr className="snow_chance">{snowChance()}</tr>
            </tbody>
        </table>
    );
}

export default PerHourTable;
