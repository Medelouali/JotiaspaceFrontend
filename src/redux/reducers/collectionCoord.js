import { collectionCoordinates } from "./vars.js";

const reducer=(state=collectionCoordinates, action)=>{
    switch(action.type){
        case "collectionCoord":
            state=action.payload;
            return state;
        default:
            return state;
    };
};

export default reducer;