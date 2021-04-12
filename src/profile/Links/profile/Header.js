import React from 'react';
import Img from './Img';
import Info from './Info';
import { useSelector } from "react-redux";

function Header() {
    const user=useSelector(state=>state.updateUser);

    return (
        <div className="account-header">
            <Img name={user.username}/>
            <Info/>
        </div>
    );
}

export default Header;
