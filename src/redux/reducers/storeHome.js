const storeHome=(state="all", action)=>{
    switch(action.type){
        case "storeHome":
            state=action.payload;
            return state;
        default:
            return state;
    }
    
};

export default storeHome;