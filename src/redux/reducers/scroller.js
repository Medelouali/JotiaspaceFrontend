

const reducer=(state=0, action)=>{
    switch(action.type){
        case "Scroller":
            state=action.payload;
            return state;
        default: 
            return state;
    }
}

export default reducer;

