import React from 'react'
import bill_pic from "../../../svg/Bill.jpg";
// import info from "../../../svg/info.svg";
// import friends from "../../../svg/friends.svg";
// import photos from "../../../svg/photos.svg";
import Link from './link/Link';
import "./picture.css";

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

function Picture({isMe, picture}) {
    return (
        <div className="picture">
            <div className="my-picture">
                <div className="mee">
                    <img src={picture} alt=""/>
                </div>

                {
                    isMe && 
                    <div className="go-to">
                        <Link logo={<InfoOutlinedIcon/>} name="Info"/>
                        <Link logo={<PhotoOutlinedIcon/>} name="Photos"/>
                        <Link logo={<PeopleAltOutlinedIcon/>} name="Friends"/>
                    </div>
                }
            </div>
        </div>
    )
}
 Picture.defaultProps={
     isMe: true,
     picture: bill_pic
 }
export default Picture
