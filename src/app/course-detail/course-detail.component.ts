import { Input, Component, OnInit } from "@angular/core";
import { Course } from "../course";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../service/course.service";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  @Input() course: Course;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private locatioin: Location,
  ) {}

  ngOnInit() {}





}

// updateActive(isActive: boolean) {
//   this.courseService
//     .updateCourse(this.course.id,
//       this.course.image,
//       this.course.name,
//       this.course.ects,
//       this.course.term,
//       this.course.activities,
//       this.course.maxStudents,
//       this.course.description,
//       this.course.rate )
//     .catch(err => console.log(err));
// }
//
// deleteCustomer() {
//   this.customerService
//     .deleteCustomer(this.customer.key)
//     .catch(err => console.log(err));
// }
// getCourse(): void {
//   const id = +this.route.snapshot.paramMap.get("id");
//   this.courseService
//     .getCourse(id)
//     .subscribe(course => (this.course = course));
// }
//
// goBack() {
//   this.locatioin.back();
// }
