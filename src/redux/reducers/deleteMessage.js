import user from "../../store_page/components/models/model";


const reducer=(state=user.messages, action)=>{
    switch(action.type){
        case "DeleteMessage":
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
export default reducer;