import { combineReducers } from "redux";
import usersReducer from "./updateUser";
import online from "./online";
import updateAll from "./updateAll";
import pager from "./pager";
import profile from "./profile";
import collection from "./collection";
import collectionCoord from "./collectionCoord";
import view from "./view";
import scroller from "./scroller";
import messanger from "./messanger";
import deleteMessage from './deleteMessage';
import chat from "./messages";
import zoomMessage from "./intoView/zoomMessage";
import storeHome from "./storeHome";


const allReducers=combineReducers({
    usersData: usersReducer,
    online: online,
    updatedUser: updateAll,
    pager: pager,
    profile: profile,
    collection: collection,
    collectionCoord: collectionCoord,  
    view: view,
    scroller: scroller,
    messanger: messanger,
    deleteMessage: deleteMessage,
    chat: chat,
    zoomMessage: zoomMessage,
    storeHome: storeHome
});

export default allReducers;