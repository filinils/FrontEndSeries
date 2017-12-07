import * as types from "./actionTypes";

export function addITemToCart(product) {
    return {
        type: types.ADD_ITEM_TO_CART,
        product
    };
}

export function addItem(product) {
    return function(dispatch) {
        //ajaxrequest
        dispatch(addITemToCart(product));
    };
}
