import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { SearchComponent } from "./search/search.component";
import { LoginComponent } from "./login/login.component";

import {AuthGuardService} from "./service/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: "courses", component: CoursesComponent, canActivate: [AuthGuardService] },
  { path: "add-course", component: AddCourseComponent, canActivate: [AuthGuardService] },
  { path: "search", component: SearchComponent, canActivate: [AuthGuardService] },
  { path: "login", component: LoginComponent },

  { path: "detail/:id", component: CourseDetailComponent, canActivate: [AuthGuardService] }
  // { path: "**", redirectTo: "/courses" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
