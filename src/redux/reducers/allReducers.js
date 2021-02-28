import { combineReducers } from "redux";
import usersReducer from "./updateUser";
import online from "./online";
import updateAll from "./updateAll";
import pager from "./pager";
import main_nav from "./main_nav";

const allReducers=combineReducers({
    usersData: usersReducer,
    online: online,
    updatedUser: updateAll,
    pager: pager,
    main_nav
});

export default allReducers;