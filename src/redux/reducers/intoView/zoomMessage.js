
const reducer=(state=false, action)=>{
    switch(action.type){
        case "ZoomMessage":
            state=action.payload;
            return state;
        default:
            return state;
    }
};

export default reducer;