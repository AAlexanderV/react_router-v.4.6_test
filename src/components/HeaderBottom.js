import { Outlet } from "react-router-dom";

function HeaderBottom({ isLoaded, error, weatherData }) {
    if (error) {
        return (
            <div className="header_bottom">
                <p>
                    {error.message} Please check the correct spelling of the
                    city.
                </p>
                <Outlet />
            </div>
        );
    } else if (!isLoaded) {
        return (
            <div className="header_bottom">
                <p>Loading...</p>
                <Outlet />
            </div>
        );
    } else {
        return (
            <div className="header_bottom">
                <p>
                    Weather in{" "}
                    <strong>{isLoaded && weatherData.location.name}</strong>
                </p>
                <Outlet />
            </div>
        );
    }
}

export default HeaderBottom;
