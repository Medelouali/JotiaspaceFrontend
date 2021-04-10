import React from "react";
import Nav from '../nav/Nav';
import Main from "./Main";
import { useSelector } from "react-redux";  
import { useDispatch } from "react-redux";
import pager from "../../../redux/actions/pager";
import "./main.css";

function Store(){
  const value = useSelector(state => state.updateUser);
  const page = useSelector(state => state.pager);
  const isOnline=useSelector(state=>state.online);
  const dispatch = useDispatch();

  if(isOnline){
    switch(page){
        case "store":
          return(
            <div id="grid">
              <Nav fri={value.unread_fri} inv={value.unread_inv} mes={value.unread_mes} 
                  not={value.unread_not} name={value.username}/>
              <Main/>
            </div>
          );
        default:
          return(<>Loading...</>);
    };
  }else{
    dispatch(pager("home"));
    return(
      <div className=""></div> 
    );
  };
}

export default Store;

