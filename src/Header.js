import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Search from '@material-ui/icons/Search';
import HelpOutLineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt='Umar'
                    src=''
                />
                <AccessTimeIcon />
            </div>

            <div className="header__search">
                <Search />
                <input placeholder='Search slack'/>
            </div>

            <div className="header__right">
                <HelpOutLineIcon />
            </div>
        </div>
    )
}

export default Header;
