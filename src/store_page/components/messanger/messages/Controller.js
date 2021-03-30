import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from "react-redux";
import deleteMessage from "../../../../redux/actions/deleteMessage";
import messanger from '../../../../redux/actions/messanger';

function Controller({index}) {
    const dispatch = useDispatch();
    const page = useSelector(state => state.messanger);
    const handleDelete=()=>{
        dispatch(deleteMessage(index));
        dispatch(messanger(1));
        dispatch(messanger(page));
    };
    return (
        <div onClick={handleDelete} className="controller">
            <DeleteIcon/>
        </div>
    )
}

export default Controller;
