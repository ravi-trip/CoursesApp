import { Injectable } from '@angular/core'; // injectable needed for dependency injection in updated versions
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
    providedIn: 'root',
})

export class CoursesService {
    constructor(public http: Http) {
        console.log('Data Service connected...');
    }
    getCourses() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map( res => res.json());
    }
}
