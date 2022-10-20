import { Link } from "react-router-dom";
import logo from "./images/meteo-cat.png";
import "./../App.css";

function HeaderTop({ setCity, setIsLoaded }) {
    const SearchCityHandler = () => {
        const text = document.getElementById("search_city");
        if (text.value) {
            setIsLoaded(false);
            setCity(text.value);
        }
    };
    const HandleKeyDown = (e) => {
        if (e.code === "Enter") {
            setIsLoaded(false);
            setCity(e.target.value);
        }
    };

    return (
        <div className="header_top">
            <div className="logo">
                <img
                    src={logo}
                    alt="Meteo-cat logo"
                />
            </div>
            <div className="search">
                <nav className="nav_menu">
                    <ul>
                        <li>
                            <Link to={`/`}>Main</Link>
                            {/* <a href={`/main`}>Weather</a> */}
                        </li>
                        <li>
                            <Link to={`/about`}>About</Link>
                            {/* <a href={`/about`}>About</a> */}
                        </li>
                    </ul>
                </nav>
                <div className="input_box">
                    <input
                        className="search_city-text"
                        autoComplete="on"
                        id="search_city"
                        name="search_city"
                        type="text"
                        placeholder="Name of city, country or region"
                        onKeyDown={HandleKeyDown}
                    ></input>
                    <span></span>
                    <svg
                        className="search_city-submit"
                        onClick={SearchCityHandler}
                    >
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
