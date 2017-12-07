import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default function personReducer(state = initialState.footer, action) {
    switch (action.type) {
        case types.LOAD_FOOTER:
            return Object.assign({}, state, action.footer);

        default:
            return state;
    }
}
