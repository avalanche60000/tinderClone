import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css";
import logo from "./assets/raw.png";
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img className="header__logo" src={logo} alt="tinder-logo" />
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header;