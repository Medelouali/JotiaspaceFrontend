import React from "react";
import Nav from './nav/Nav';
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
            <div className="grid">
              <Nav fri={value.unreadFri} inv={value.unreadInv} mes={value.unreadMes} 
                  not={value.unreadNot} name={value.username}/>
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

