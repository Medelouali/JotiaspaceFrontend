import { combineReducers } from "redux";
import updateUser from "./updateUser";
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
import sendMessage from "./sendMessage";
import chatIndexer from "./chatIndexer";
import signer from "./signer";
import processing from "./processing";
import socket from "./socket";

const allReducers=combineReducers({
    updateUser: updateUser,
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
    storeHome: storeHome,
    sendMessage: sendMessage,
    chatIndexer: chatIndexer,
    signer: signer,
    processing: processing,
    socket: socket
});

export default allReducers;