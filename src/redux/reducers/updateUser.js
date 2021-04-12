//import user from "../../store_page/components/models/model.js";

const reducer=(state={}, action)=>{
    switch(action.type){
        case "Update":
            state=action.payload;
            return state;
        default:
            return state;
    }
};

export default reducer;