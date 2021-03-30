const action=(index)=>{
    return{
        type: "DeleteMessage",
        payload: index
    }
}

export default action;