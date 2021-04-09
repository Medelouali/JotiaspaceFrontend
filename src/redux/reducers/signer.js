const reducer=(state={}, action)=>{
    switch(action.type){
        case "Signer":
            state[action.payload.key]=action.payload.value;
            return state;
        default:
            return state;
    }
};

export default reducer;