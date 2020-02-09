import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { RateComponent } from "./rate/rate.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { NavComponent } from "./nav/nav.component";
import { SearchComponent } from "./search/search.component";
import { Ng5SliderModule } from "ng5-slider";
import { LoginComponent } from "./login/login.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import {
  PaginationPipe, SearchPipeByMaxECTS,
  SearchPipeByMaxRating, SearchPipeByMaxTerm,
  SearchPipeByMinECTS,
  SearchPipeByMinRating, SearchPipeByMinTerm,
  SearchPipeByName
} from "./filter/search.pipe";

// import { Search } from './filter/search.text.pipe';
// import { Search } from './filter/search.ects.pipe';
// import { Search } from './filter/search.rate.pipe';
// import { Search } from './filter/search.term.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesComponent,
    CourseDetailComponent,
    RateComponent,
    AddCourseComponent,
    NavComponent,
    SearchComponent,
    LoginComponent,
    SearchPipeByName,
    SearchPipeByMinECTS,
    SearchPipeByMaxECTS,
    PaginationPipe,
    SearchPipeByMinRating,
    SearchPipeByMaxRating,
    SearchPipeByMinTerm,
    SearchPipeByMaxTerm


    // Search.TextPipe,
    // Search.EctsPipe,
    // Search.RatePipe,
    // Search.TermPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, // do obsługi autentykacji
    AngularFirestoreModule, // do obslugi baz danych
    AngularFireDatabaseModule // do obslugi baz danych
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
