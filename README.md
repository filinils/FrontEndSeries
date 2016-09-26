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

TODO: Add information about the next session.

# Course case

Troughout the course we will build an application to display information about the course. The data is located in the [course.json](../cource.json)


    



            


        

 
