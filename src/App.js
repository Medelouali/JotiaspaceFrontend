import React from 'react';
import Manage from './Manage';
import { useSelector } from "react-redux";

function App(){
  const page = useSelector(state => state.pager);
  return(
    <Manage page={page}/>
  );
};

export default App