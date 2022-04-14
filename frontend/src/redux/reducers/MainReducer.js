import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";

const MainReducer = combineReducers({
    UserReducer,
    ProductReducer,
})

export default MainReducer  