const online=(state=false, action)=>{
    switch(action.type){
        case "Log":
            state=action.payload;
            return state;
        default:
            return state;
    };
};

export default online;