(function(){

var getDataBtn = document.getElementById('btn-getdata');
var content = document.getElementById('content');

getDataBtn.addEventListener('click',getCourseData);

function getCourseData(){
    datacontext().getCourseSessions(function(courseSessions){

renderView(courseSessions);

    });

}

function renderView(sessions){
    content.innerHTML = JSON.stringify(sessions);
}



})();