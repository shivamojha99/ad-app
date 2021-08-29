import React from 'react'
import Ads from './Ads'
import './Display.css'
import MenuIcon from '@material-ui/icons/Menu';

function Display() {
    return (
        <>
        <div className="side_menu">

            <div class="dropdown">
                <MenuIcon className="dropbtn"></MenuIcon>
                <div class="dropdown-content">
                    <a href="#">Create</a>
                    <a href="#">Publish</a>
                    <a href="#">View</a>
                </div>
            </div>
            
        </div>
        <div className="align">
            <Ads/>
            <Ads/>
        </div>
        </>
    )
}

export default Display
