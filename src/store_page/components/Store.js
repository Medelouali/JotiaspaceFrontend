import React from "react";
import Nav from './Nav';
import Main from "./Main";
import { useSelector } from "react-redux";  
import { useDispatch } from "react-redux";
import pager from "../../redux/actions/pager";

function Store(){
  const value = useSelector(state => state.usersData);
  const page = useSelector(state => state.pager);
  const isOnline=useSelector(state=>state.online);
  const dispatch = useDispatch();

  if(isOnline){
    switch(page){
        case "store":
          return(
            <div id="grid">
              <Nav fri={value.fri} inv={value.inv} mes={value.mes} not={value.not} name={value.username}/>
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

