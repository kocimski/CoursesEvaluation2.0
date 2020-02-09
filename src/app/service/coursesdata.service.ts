import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Course } from "../course";

@Injectable({
  providedIn: "root"
})
export class CoursesdataService {
  private coursesPath = "/courses";
  private usersPath = "/users";
  private listOfCourses: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {
    this.listOfCourses = this.firebase.list(this.coursesPath);
  }

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getCoursesFromDataBase(): AngularFireList<Course> {
    return this.listOfCourses;
  }

  addCourseToDataBase(course: Course): void {
    this.listOfCourses.push(course);
  }

  updateCourseInDataBase(
    id: string,
    newRating: number,
    newRateNumber: number
  ): void {
    this.firebase.database.ref(`${this.coursesPath}/${id}/rate`).set(newRating);
    this.firebase.database
      .ref(`${this.coursesPath}/${id}/ratenumber`)
      .set(newRateNumber);
  }

  deleteCourseFromDataBase(id: string): void {
    this.listOfCourses.remove(id);
  }

  signStudentToCourseInDataBase(id: string, newSignedStudents) {
    this.firebase.database
      .ref(`${this.coursesPath}/${id}/maxStudents`)
      .set(newSignedStudents);
  }

  getCourseFromDataBase(id: string) {
    return this.firebase.object(`${this.coursesPath}/${id}`);
  }

  getCourseFromUserDataBase(uid: string, id: string) {
    return this.firebase.object(`${this.usersPath}/${uid}/userCourses/${id}`);
  }

  changeCourseNameInDataBase(id: string, newName: string) {
    this.firebase.database.ref(`${this.coursesPath}/${id}/name`).set(newName);
  }

  changeCourseECTSInDataBase(id: string, newECTS: number) {
    this.firebase.database.ref(`${this.coursesPath}/${id}/ects`).set(newECTS);
  }

  changeCourseSemesterInDataBase(id: string, newterm: number) {
    this.firebase.database.ref(`${this.coursesPath}/${id}/term`).set(newterm);
  }

  changeCourseLectureInDataBase(id: string, newActivities: string) {
    this.firebase.database
      .ref(`${this.coursesPath}/${id}/activities`)
      .set(newActivities);
  }

  changeCourseStudentsInDataBase(id: string, newStudentsNumber: number) {
    this.firebase.database
      .ref(`${this.coursesPath}/${id}/maxStudents`)
      .set(newStudentsNumber);
  }

  changeCourseIdInDataBase(id: string, newId: number) {
    this.firebase.database.ref(`${this.coursesPath}/${id}/id`).set(newId);
  }
  changeCourseDescriptionInDataBase(id: string, newDescription: string) {
    this.firebase.database
      .ref(`${this.coursesPath}/${id}/description`)
      .set(newDescription);
  }
}
