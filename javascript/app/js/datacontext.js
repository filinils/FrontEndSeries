function datacontext() {
    function getCourseData(callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open("GET", "https://raw.githubusercontent.com/filinils/FrontEndSeries/master/course.json", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
    }

    return {
        getCourseDataV: getCourseData,
    }
}

function expand(row) {
    $(row).children().children().toggle("fast");
}