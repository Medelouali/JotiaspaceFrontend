import React from "react";
import Nav from './Nav';
import Main from "./Main";
import { useSelector } from "react-redux";  
import Post from "../../interface/Post";
import SignIn from "../../home_page/components/Sign/SignIn";

function  Store(){
  const value = useSelector(state => state.usersData);
  const page = useSelector(state => state.pager);
  const isOnline=useSelector(state=>state.online);
  if(isOnline){
    switch(page){
        case 0:
          return(
            <div id="grid">
              <Nav fri={value.fri} inv={value.inv} mes={value.mes} not={value.not} name={value.username}/>
              <Main/>
            </div>
          );
        case 1:
          return(
            <Post/>
          );
        default:
          return(<>Loading...</>);
    };
  }else{
    return(
      <SignIn/>  
    );
  };
}

export default Store;

