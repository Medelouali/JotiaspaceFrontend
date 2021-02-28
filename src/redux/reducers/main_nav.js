
const main_nav=(state=true, action)=>{
    switch(action.type){
        case "MainNav":
            state=action.payload;
            return state;
        default:
            return state;
    };
};

export default main_nav;