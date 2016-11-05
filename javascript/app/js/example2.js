(function() {
    function module() {
        var color = "blue";

        function changeColor() {
            color = "blue";

        }
        return {
            changeColor: changeColor
        };
    }
    console.log();
    module();


})();