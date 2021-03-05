import React from 'react';
import Img from './Img';
import Info from './Info';

function Header() {
    return (
        <div className="account-header">
            <Img name="Mark Zuckerberg"/>
            <Info/>
        </div>
    );
}

export default Header;
