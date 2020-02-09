import { Component, OnInit, Output } from "@angular/core";
import { Course } from "../course";
import { COURSES } from "../mock-courses";
import { CourseService } from "../service/course.service";
import { map } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { FirebaseListObservable } from "@angular/fire/database-deprecated";
import * as firebase from "firebase";
import { CoursesdataService } from "../service/coursesdata.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  courses: any;
  selectedCourse: Course;

  constructor(
    private courseService: CourseService,
    private courseDataService: CoursesdataService
  ) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService
      .getCourses()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  onSelect(course: Course) {
    this.selectedCourse = course;
  }

  deleteCourse(course: Course) {
    this.courseDataService.deleteCourseFromDataBase(course.id);
  }
}

// getCourses(): void {
//   this.courseService
//     .getCourses()
//     .subscribe(courses => (this.courses = courses));
// }
