//the default is home not store 
const reducer=(state="profile", action)=>{
    switch(action.type){
        case "Page":
            state=action.payload;
            return state;
        default:
            return state;
    }
};

export default reducer;