import DayLayout from "./DayLayout";

function TabsDays({ days, activeTabDay, setActiveTabDay }) {
    return (
        <div className="tabs_days">
            {days.map((day, index) => {
                return (
                    <DayLayout
                        index={index}
                        day={day}
                        activeTabDay={activeTabDay}
                        setActiveTabDay={setActiveTabDay}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default TabsDays;
