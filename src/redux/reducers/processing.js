const processing=(state={
    flag: false,
    phrase: ""
}, action)=>{
    switch (action.type) {
        case "Processing":
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default processing;