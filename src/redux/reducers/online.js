const online=(state=true, action)=>{
    switch(action.type){
        case "Login":
            state=true;
            return state;
        case "Logout":
            state=false;
            return state;
        default:
            return state;
    };
};

export default online;