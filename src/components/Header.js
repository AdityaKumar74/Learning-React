import { useState } from "react";
import { LOGO_URL } from "./utils/constants";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const btnHandler = () => {
        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <li className="login" onClick={btnHandler}>{loginBtn}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;