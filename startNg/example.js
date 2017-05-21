function ctrl1() {
    var overlay = false;

    function didChange(arg) {
        overlay = arg;

    }

    service.registerSubs(didChange);
    service.change();
}

function ctrl2() {

    var overlay = false;

    function didChange(arg) {
        overlay = arg;

    }
    service.registerSubs(didChange);
}

function service() {

    var subs = [];

    function registerSubs(sub) {

        subs.push(sub);

    }

    function change() {

        subs.forEach(function (sub) {
            sub.didChange();
        })
    }


    return {

        registerSubs: registerSubs,
        change: change
    }

}

function promise() {

    function async(fn) {
        fn();
    }


    function then(fn) {

        async(fn);

    }


    return then;
}

promise().then(function(){
    
})