import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { useDispatch, useSelector } from "react-redux";
import deleteMessage from "../../../../../../../redux/actions/deleteMessage";
import messanger from '../../../../../../../redux/actions/messanger';
import chat from "../../../../../../../redux/actions/messages";

import "./controller.css";

function Controller({index}) {
    const dispatch = useDispatch();
    const page = useSelector(state => state.messanger);
    const handleDelete=()=>{
        dispatch(deleteMessage(index));
        dispatch(messanger(1));
        dispatch(messanger(page));
        dispatch(chat([]));
    };
    return (
        <div onClick={handleDelete} className="controller">
            <DeleteOutlineIcon/>
        </div>
    )
}

export default Controller;
