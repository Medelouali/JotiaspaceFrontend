import React from 'react'
import bill_pic from "./svg/Bill.jpg";
import info from "./svg/info.svg";
import friends from "./svg/friends.svg";
import photos from "./svg/photos.svg";
import Link from './Link';

function Picture() {
    return (
        <div className="picture">
            <div className="my-picture">
                <img src={bill_pic} alt=""/>
                <div className="go-to">
                    <Link logo={info} name="Info"/>
                    <Link logo={photos} name="Photos"/>
                    <Link logo={friends} name="Friends"/>
                </div>
            </div>
        </div>
    )
}

export default Picture
