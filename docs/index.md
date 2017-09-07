# Introduction

This repo will hold all assignments as well as excersice files, start projects and examples. It is completly open to all contributers so consider this as a playground and feel free to improve or create new files. The level of complexity is up the editors.


## Session 3 -- CSS   

In this session, we will introduce CSS. The main goal is not to go through all the styling option there is in CSS, but propose and discuss a structure that can help in the process of styling a website. 
The design we will style is uploaded to [Zeplin here] (http://zpl.io/2lqMCL). If you don't have a Zeplin account create.


### Task

    1.To get started with sass, continuing from the previous example, install gulp-sass by typing "npm install gulp-sass -save-dev"(remember to install in local or global scope if you want to run from command line) from the terminal in your project folder. 
    2.Create folder structure:
        To get started create the following folder structure, from your root app folder:
        styles\
            scss\
                base\
                layout\
                modules\
                theme\(optional)
                main. scss
            css\
                main.css
    3.Create a task that will compile your sass:
```javascript
        gulp.task('sass', function () {
            return gulp.src('./styles/sass/main.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest('./styles/css'));
            });
```
Figure out your src file and output. Also, check your "index" task to include css as well:
```javascript
            gulp. task('index', function () {
                var target = gulp.src('index.html');
                    var sources = gulp.src(['styles/css/**/*.css','app/**/*.js'], {read: false});
                    
                    return target.pipe(inject(sources))
                    .pipe(gulp.dest('./'));
                });
```
    4. Create a first layout file "layout-head.scss" under the layout folder.
    5. Create an import statement in main.scss "@import './layout/layout-header';" 
    6. Try your setup
    7. Start by defining layouts eg. head, left-sidebar. right-sidebar etc
    8. Define the modules
    9. Implement the design! :) 


Try to stay true to the [design](http://zpl.io/2lqMCL). Also, try to add and style a list in the content area and populate it with the [course data](../testApp/course.json).

If you find time, try to make the design responsive or at least prepare to discuss how it can be done. 










# Course case

Throughout the course we will build an application to display information about the course. The data is in the [course. json](../testApp/course.json)