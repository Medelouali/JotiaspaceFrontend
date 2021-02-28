

const reducer=(state=null, action)=>{
    switch(action.type){
        case "updateAll":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;