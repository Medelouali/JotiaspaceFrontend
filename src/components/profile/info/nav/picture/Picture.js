import React from 'react'
import Link from './link/Link';
import "./picture.css";

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

function Picture({isMe, picture, name, bio}) {
    return (
        <div className="picture">
            <div className="my-picture">
                <div className="mee">
                    <img src={picture} alt=""/>
                </div>
                <div className="my-name">{name}</div>
                <div className="bio">{bio}</div>
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
     picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHNtaWxpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
     name: false,
     bio: false
 }
export default Picture
