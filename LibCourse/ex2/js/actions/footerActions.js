import * as types from "./actionTypes";
import dc from "../data/datacontext";

export function loadFooterSuccess(footer) {
    return { type: types.LOAD_FOOTER, footer };
}

export function loadFooter() {
    return function(dispatch) {
        return dc.footer.getAll().then(footer => {
            if (footer.data) {
                dispatch(loadFooterSuccess(footer.data));
            }
        });
    };
}
