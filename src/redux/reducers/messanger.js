const messanger=(state=-1, action)=>{
    switch(action.type){
        case "Message":
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default messanger;