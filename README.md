# FrontEndSeries

## Session 1 -- node and task management

As a first step in this course we will go trough task management and the basics of handling javascript projects in node. 

Before the next session everyone should follow these basic steps: 

1. Clone this repo:
    1. create a projects folder or use an existing one
    2. run command: git clone https://github.com/filinils/FrontEndSeries.git
    3. create a new branch and check it out: git checkout -b \<your branch\>
 
2.Initiate projects
 1. Run command: npm init 

    This will create a package.json file with the basic information. Just follow along and provide what is required

3.Install your dependencies:

    1. run command: npm install gulp --save
        
        1. install some gulp dependancies e.g: 
            *  browser-sync
            *  gulp-sass
            *  gulp-wiredep
            *  gulp-inject
            *  gulp-sourcemaps
            *  gulp-uglify

        Look into the documentation for theses packages.

4.Create a gulpfile.js

    Here is a example task that has a dependancy to sourcemaps, uglify and concat. 
    This task take all the *.js files in the folder "app" and subfolders and uglify and concat them into one file write then write sourcemaps to it. 
    The gulp procces runs the command in the first pipe and then deliver the result to the nex pipe 
    
```javascript
    gulp.task("concat", function () {

    return gulp.src('app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
            });
```

    Try to recreate this task. 

5. Optional steps: 
    
    1. Install bower and init a bower.json
    2. Setup sass compilation
    3. Setup browser sync 

## Session 2 -- JavaScript

In this session we will build a small application that fetch data in JSON format from a file using ajax requests.

From our last session we can bring down the environment from master. When we add files to the app folder the gulp watch should add the script tags that is needed in index.html. 

1. Start by adding two files in "app/"(datacontext.js and view.js)
    * Seperating integrations, such as database requests and service consumption, with view logic adds to seperation of concerns. We'll cover more on arcitechtural patterns when we go trought larger libraries/frameworks in later sessions.
2. Create the datacontext
    * Declare a function called "datacontext"
    * use "reveling module pattern" and expose a public function in datacontext
    ```javascript
    function datacontext(){
        
        function getCourseData(){
            ...
        }

        
        return{
            getCourseData:getCourseData
        }
    }
    ```
    * create an ajax request to fetch the data from the [course.json](../testApp/course.json) file
    ```javascript
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
           
        }
        xhttp.open("GET", "../course.json", true);

        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhttp.send();
    ```
    * Try to figure out a way to expose the returned data to the consumer of this method. Hint: "this" and "callbacks".
3. Create the view handler in view.js
    * create an IIFE to contain your logic and minimise polution of global scope.
     ```javascript
        (function(){
            ...
        })();
    ```
    * fetch a button from the DOM `var getDataBtn = document.getElementById('btn-getdata');`, you can aslo use `document.getElementsByClassName ` or `getElementsByTagName`, however then you also need to figure out a way to find your specific target from the array returned.
    * Also fetch a content area like previous step. 
    * add an event listner to your button with `getDataBtn.addEventListner('click',getCourseData)`
    * create a function consuming your datacontext ajax request `datacontext().getCourseData``
    * manipulate your content object by adding elements either by `content.innerHTML = '<div>+dataFromAjax+</div>` or `var table = document.createElement('table')` and build you structure up from the data. 
4. Add elements for content and button to index.html

5. Optional
    1. create a table for all the sessions
    2. expand the list of topics when clicking on a row.


    


# Course case

Troughout the course we will build an application to display information about the course. The data is located in the [course.json](../testApp/course.json)


    



            


        

 
