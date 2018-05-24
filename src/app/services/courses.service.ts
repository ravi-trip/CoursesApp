// import { Injectable } from '@angular/core'; // injectable needed for dependency injection in updated versions

// @Injectable({
//     providedIn: 'root',
// })

export class CoursesService {
    getCourses() {
        return ['course1', 'course2', 'course3'];
    }
}
