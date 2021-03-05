import { collections } from "./vars";

const reducer=(state=collections, action)=>{
    switch(action.type){
        case "Collection":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;