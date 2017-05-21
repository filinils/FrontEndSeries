import {Injectable,Inject} from '@angular/core';
import {Http,Headers,URLSearchParams} from '@angular/http';




@Injectable()
class CourseService {
    
    http:Http;

    constructor(http:Http)  {
        this.http = http;
    }

    getCourses() {
        return this.http.get('../couses.json');
    }





   

}

export default CourseService;