import { Component } from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "./service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Courses Evaluation";
  isLogged$: Observable<boolean>;
  constructor(private auth: AuthService,
              private router: Router){}

  ngOnInit() {
    this.isLogged$=this.auth.authState$;
  }
  logout()
  {
    this.auth.logout().then(()=>this.router.navigate(['/login']));
  }
}
