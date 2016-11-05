(function() {
    function product(price) {

        var ex = "hello";
        this.ex2 = price;

        function bar() {
            console.log(ex);
            console.log(ex2);
            this.ex2 = "something else";
        }

        // console.log(bar.ex2);

        //bar.call(foo);
        //foo.call(bar);

    }

    function food() {
        this.color = "blue";
        product.call(this, 20);
        console.log(this.ex2);
        return this;
    }

    var pizza = new food();
    var kebab = Object.create(food);

    /*pizza.prototype.changeColor = function() {
        this.color = "red";
    }

    pizza().changeColor();*/

    food();
})();