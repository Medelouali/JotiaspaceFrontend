

function scroller (state=false, action){
    switch(action.type){
        case "Scrolling":
            state=!state;
            return state;
        default:
            return state;
    }
}

export default scroller;