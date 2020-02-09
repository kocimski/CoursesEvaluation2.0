import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import { CourseService } from "../service/course.service";
import { Location } from "@angular/common";
import {Observable} from "rxjs";
import {AuthService} from "../service/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  nav: number = 0;
  isLogged$: Observable<boolean>;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private locatioin: Location,
    private auth: AuthService,
    private router: Router
  ) {}

  selectedCourses() {
    this.nav = 0;
  }
  selectedAdd() {
    this.nav = 1;
  }
  selectedSearch() {
    this.nav = 2;
  }




  ngOnInit() {
    this.isLogged$=this.auth.authState$;
  }
  logout()
  {
    this.auth.logout().then(()=>this.router.navigate(['/login']));
  }
}
