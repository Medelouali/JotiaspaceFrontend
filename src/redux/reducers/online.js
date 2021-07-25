//the default is false not true
const online=(state=true, action)=>{
    switch(action.type){
        case "Log":
            state=action.payload;
            return state;
        default:
            return state;
    };
};

export default online;