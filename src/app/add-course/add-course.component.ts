import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Course} from '../course';
import {CourseService} from '../service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {


  constructor(private courseService: CourseService) {

  }
  test: string;


  acts: string[] = [
    'Lecture',
    'Audit. classes',
    'Lab. classes',
    'Project classes',
    'Conv. seminar',
    'Seminar classes',
    'Pract. classes',
    'Others',
    'E-learning'
  ];
  myform: FormGroup;
  subject: FormControl;
  image: FormControl;
  ects: FormControl;
  term: FormControl;
  maxStudents: FormControl;
  activities: FormControl;
  description: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.subject = new FormControl('', Validators.required);
    this.image = new FormControl('', Validators.required);
    this.ects = new FormControl('', Validators.required);
    this.term = new FormControl('', Validators.required);
    this.maxStudents = new FormControl('', Validators.required);
    this.description = new FormControl('', [
      Validators.required,
      Validators.minLength(30)
    ]);
    this.activities = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
        subject: this.subject,
        image: this.image,
      ects: this.ects,
      term: this.term,
      maxStudents: this.maxStudents,
      activities: this.activities,
      description: this.description
    });
  }

  tmp(test: string) {
    console.log(test);

  }

  dodaj() {
    this.courseService.addCourse('0', '0', 0, 0, 'lecture', 0, 'dsfsdfnsjlsdnsdfnkjnsdklfdjs', 0);
  }

  submit() {
   // if (this.myform.valid) {

      const subject: string = this.myform.value.subject;
      const image: string = this.myform.value.image;
      const ects: number = this.myform.value.ects;
      const term: number = this.myform.value.term;
      const activities: string = this.myform.value.activities;
      const maxStudents: number = this.myform.value.maxStudents;
      const description: string = this.myform.value.description;
      const rate = 1;
      this.test = this.myform.value.subject;
      this.tmp(this.test);

    this.courseService.addCourse(image, subject, ects, term, activities, maxStudents, description, rate);

    //}


  }


}
