import { Injectable } from "@angular/core";
import { Course } from "../course";
import { COURSES } from "../mock-courses";
import { Observable, of } from "rxjs";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  dbpath = "courses";
  coursesRef: AngularFireList<Course> = null;
  constructor(private db: AngularFireDatabase) {
    this.coursesRef = db.list(this.dbpath);
  }

  createCourse(
    image: string,
    name: string,
    ects: number,
    term: number,
    activities: string,
    maxStudents: number,
    description: string,
    rate: number
  ): Course {
    const newCourse = new Course();
    newCourse.image = image;
    newCourse.name = name;
    newCourse.ects = ects;
    newCourse.term = term;
    newCourse.activities = activities;
    newCourse.maxStudents = maxStudents;
    newCourse.description = description;
    newCourse.description = description;
    newCourse.rate = rate;
    newCourse.rateNumber = 0;
    return newCourse;
  }

  addCourse(
    image: string,
    name: string,
    ects: number,
    term: number,
    activities: string,
    maxStudents: number,
    description: string,
    rate: number
  ) {
    this.coursesRef.push(
      this.createCourse(
        image,
        name,
        ects,
        term,
        activities,
        maxStudents,
        description,
        rate
      )
    );
  }
  updateCourse(
    id: string,
    image: string,
    name: string,
    ects: number,
    term: number,
    activities: string,
    maxStudents: number,
    description: string,
    rate: number
  ) {
    this.coursesRef.update(
      id,
      this.createCourse(
        image,
        name,
        ects,
        term,
        activities,
        maxStudents,
        description,
        rate
      )
    );
  }
  deleteCourse(id: string) {
    this.coursesRef.remove(id);
  }
  getCourses(): AngularFireList<Course> {
    return this.coursesRef;
  }
  deleteAll() {
    return this.coursesRef.remove();
  }
}
