//import user from "../../store_page/components/models/model.js";

const reducer=(state={}, action)=>{
    switch(action.type){
        case "update":
            state.username=action.payload.username;
            state.email=action.payload.email;
            state.password=action.payload.password;
            state._id=action.payload._id;
            return state;
        default:
            return state;
    }
};

export default reducer;