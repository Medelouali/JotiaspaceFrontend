const reducer=(state=null, action)=>{
    switch(action.type){
        case "Socket":
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default reducer;