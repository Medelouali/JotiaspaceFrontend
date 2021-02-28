import { combineReducers } from "redux";
import usersReducer from "./updateUser";
import online from "./online";
import updateAll from "./updateAll";
import pager from "./pager";

const allReducers=combineReducers({
    usersData: usersReducer,
    online: online,
    updatedUser: updateAll,
    pager: pager
});

export default allReducers;