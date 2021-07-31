import user from "../../components/store/models/model";



const reducer=(state=user, action)=>{
    switch(action.type){
        case "SendMessage":
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default reducer;