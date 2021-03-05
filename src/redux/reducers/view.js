const view=(state="", action)=>{
    switch(action.type){
        case "View":
            return action.payload;
        default:
            return state;
    }
};

export default view;