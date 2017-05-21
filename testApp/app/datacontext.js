function datacontext() {

    function getCourseSessions(callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            var sessions = JSON.parse(this.response);

                callback(sessions);
            }
        }
        xhttp.open("GET", "../course.json", true);

        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhttp.send();


    }

return {
    getCourseSessions:getCourseSessions
};
}