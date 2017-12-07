import React from "react";
import { addItem } from "../../actions/cartActions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: props.cart ? props.cart : { products: [] }
        };

        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(event) {
        this.props.addItem({ name: "hello" });
    }

    render() {
        return (
            <ul>
                <li onClick={this.addToCart}>Product</li>
                <li onClick={this.addToCart}>Product</li>
                <li onClick={this.addToCart}>Product</li>
                <li onClick={this.addToCart}>Product</li>
                <li onClick={this.addToCart}>Product</li>
                <li onClick={this.addToCart}>Product</li>
                <li onClick={this.addToCart}>Product</li>
                <li onClick={this.addToCart}>Product</li>
                <li onClick={this.addToCart}>Product</li>
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addItem }, dispatch);
}
function mapStateToProps(state, ownProps) {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
