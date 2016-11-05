(function() {
    var getDataBtn = document.getElementById("btn-getdata");
    var output = document.getElementById("outputDiv");

    getDataBtn.addEventListener('click', getCourseData);

    function getCourseData() {
        datacontext().getCourseDataV(populate);
    }

    function populate(courses) {
        var parsedResp = JSON.parse(courses);

        var title = parsedResp.course;
        var sessions = parsedResp.sessions;

        var table = "<table>";
        table += "<tr><th>" + title + "</th></tr>";
        table += "<tr><td>Sessions </td></tr>"

        for (var i = 0; i < sessions.length; i++) {
            table += "<tr class='row' onclick='expand(this)'><td>" + sessions[i].name;
            table += "<ul style='display:none'>";
            if (sessions[i].subjects != null) {
                for (var j = 0; j < sessions[i].subjects.length; j++) {
                    table += "<li>" + sessions[i].subjects[j].name + "</li>";
                }
            }

            table += "</ul>";
            table += "</td></tr>";
        }
        table += "</table>"
        document.getElementById("outputDiv").innerHTML = table;
    }

    
function expand(row) {
    $(row).children().children().toggle("fast");
}

})();