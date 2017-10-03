# 2. JavaScript and CSS

In this session we will build a small application that fetch data in JSON format from a file using ajax requests.

From our last session we can bring down the environment from master. When we add files to the app folder the gulp watch should add the script tags that is needed in index.html. 

1. Start by adding two files in "app/"(datacontext.js and view.js)
    * Separating integrations, such as database requests and service consumption, with view logic adds to separation of concerns. We'll cover more on architechtural patterns when we go trough larger libraries/frameworks in later sessions.

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

5. Add simple client side routing, i.e. functionality that aligns the app state with the URL and vice versa without reloading the page.
    * read and write urls using the window.location object as seen [here](http://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash#hash-based-routing)
    * connect that control with the right application states - i.e. your routes
    * use the [History api](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to align the history
    * But first: try understand client side routing from these examples [a-javascript-router-in-20-lines](http://joakim.beng.se/blog/posts/a-javascript-router-in-20-lines.html) and [deep-dive-into-client-side-routing-navigo-pushstate-hash](http://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash).

6. Optional
    1. create a table for all the sessions
    2. expand the list of topics when clicking on a row.


A big problem with CSS is that it is flexible, which makes that, it is about as many solution to a problem that there are developers. So, when a new developer comes along he or she tends to create a new solution instead of reusing existing solutions. In time CSS in an application grows into this huge unmanageable files that supposed to be sent out to every user or client who uses a system. The problem is not CSS but the lack of structures and methodologies to relies on. 

My proposal to this problem is to use SMACSS as guideline to plan and maintain your CSS. Of course, there is other guidelines as well and feel free to explore and use other techniques to solve this task, but please try to find solutions that is easy to understand and communicate to others. 

When you start, a project spends some time to plan your CSS and different areas. SMACSS define four areas:
    
    1.Base
        These are your base tags e.g. body, a, button, input and so on. 
    2. layout
        Identify the main areas of the site, header, sidebar content, navigation and so on.
        name these ".layout-???" and place them into separate files so when you look through the html you will have a clear view of what is layout structures. Layouts will define areas where you can add modules. Their responsibility is to maintain that area not style modules. 
    3. modules
        These are your buttons, links, lists and list-items and so on. The idea of planning these ahead is to identify areas that can reuse the same modules. For instance if you have a button on a list-item can you use the same style for a button in a navigation? or do you have a tooltip when you hover a user name that can be used for a list-item. As a convention, be specific and name modules so it is obvious what the modules is e.g. button, listview, tab and so on this way you eliminate confusion when other developers look at your code. Name variation separated with "-" like tab-small, btn-large and. By actually defining btn-variation and not separation those like “. btn ".variation" it can be hard to know what ".variation" actually style, is it only btns or do they style something else? 

Modules can have state for instance a btn can be active, then the style for that should look like "btn-is-active".
        here is an example of a button with state.
           
```css
                . btn{
                    color:#000;
                    font:Arial;
                    background-color:white;

                }
                .btn-large{
                    width:200px;
                    height:100px;
                }
                .btn-is-active{
                    background-color:grey;

                }

```

```html
            <button class="btn btn-large btn-is-active">
```

### Css

SMACSS also define themes but we rarely use that so I won't explain it here. 

Some pointers when styling responsively. There is basically two ways of creating responsive styles, breakpoints(media queries) and have a fluid design(percent based, also flex-box and new css grid applies to this) or a combination of these. There is much to take into consideration when creating a responsive design one of them is browser support for instance css grid is still experimental and not supported by most browsers. I have also seen som projects dividing styles for different screen sizes into sepperate files, loading only the file for the device that is used. I believe that if it is possible the best way is to have a fluid design allowing items to "fall" into place as screen sizes vary and styling unique module at the same place/file/section. Feel free to explore or come up with own ideas and bring them to the table on the next session. 

Regarding CSS libraries I would say to use them in any place you want a generic look. If you use them try not to override it's behaviour. So, if you want a generic “look and feel” use libraries e.g. bootstrap. If you want a custom “look and feel” create your own structure, based on a good conventions. Otherwise you will spend a lot of time customizing the library instead of solving/developing a design. 


Feel free to use use sass, but think about why you are using it when you are not writing your CSS based on a specific html structure and instead are focusing on modules.

            


    
