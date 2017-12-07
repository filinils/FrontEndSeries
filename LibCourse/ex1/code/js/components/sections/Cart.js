import React from "react";
import { connect } from "react-redux";

const Cart = ({ cart = [] }) => {
    return (
        <div>
            <h4>Total number of item: </h4>
            <h3>{cart.products.length}</h3>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps)(Cart);
