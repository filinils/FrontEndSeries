import { combineReducers } from "redux";
import footer from "./footerReducer";
import header from "./headerReducer";

const rootReducer = combineReducers({
    header,footer
});

export default rootReducer;
