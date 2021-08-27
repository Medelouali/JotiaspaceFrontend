//import user from "../../store_page/components/models/model.js";

const reducer=(state={}, action)=>{
    switch(action.type){
        case "Update":
            Object.keys(action.payload).forEach(key=>state[key]=action.payload[key]);
            return state;
        default:
            return state;
    }
};

export default reducer;