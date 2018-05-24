import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';
@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    title =  'List of courses';
    courses;

    constructor( service: CoursesService) {
        // const service = new CoursesService();
        this.courses = service.getCourses();
    }
}
