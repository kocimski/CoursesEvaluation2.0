import { Component, OnInit } from "@angular/core";

import { Options } from "ng5-slider";
import { Course } from "../course";
import { CoursesdataService } from "../service/coursesdata.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  selectedCourse: Course;
  constructor(private courseDataService: CoursesdataService) {}
  name: string;
  courses: Course[];
  minEcts: number = 5;
  maxEcts: number = 10;

  ectsOptions: Options = {
    floor: 0,
    ceil: 30
  };

  minRate: number = 0;
  maxRate: number = 4;
  rateOptions: Options = {
    floor: 0,
    ceil: 5
  };

  minTerm: number = 0;
  maxTerm: number = 4;
  termOptions: Options = {
    floor: 0,
    ceil: 10
  };

  ngOnInit() {
    this.getCourses();
  }

  searching() {
    console.log("Trwa wyszukiwanie!");
  }
  onSelect(course: Course) {
    this.selectedCourse = course;
  }

  getCourses() {
    this.courseDataService
      .getCoursesFromDataBase()
      .snapshotChanges()
      .forEach(coursesSnaphot => {
        this.courses = [];
        coursesSnaphot.forEach(coursesSnap => {
          const crs = coursesSnap.payload.toJSON();
          const loadKey = "$id";
          crs[loadKey] = coursesSnap.key;
          this.courses.push(crs as Course);
        });
      });
  }
}
