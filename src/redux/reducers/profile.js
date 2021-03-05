

const reducer=(state="", action)=>{
    switch(action.type){
        case "Profile":
            return action.payload;
        default:
            return state;
    };
}

export default reducer;