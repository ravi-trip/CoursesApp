import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CoursesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
