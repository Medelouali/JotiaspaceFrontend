const reducer=(state=0, action)=>{
    switch(action.type){
        case "Page":
            state=action.payload;
            return state;
        default:
            return state;
    }
};

export default reducer;