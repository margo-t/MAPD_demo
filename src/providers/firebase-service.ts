import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import * as firebase from 'firebase';

/*
  Generated class for the FirebaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseService {

  program: FirebaseObjectObservable<any>;
  courses: FirebaseListObservable<any[]>;
  teachers: FirebaseListObservable<any[]>;
  comments: FirebaseListObservable<any[]>;
  folder: any;

  constructor(private af: AngularFire) {
    //this.program = this.af.database.list('program') as FirebaseListObservable<Program[]>;
    //this.note = this.af.database.object('/notes/'+id) as FirebaseObjectObservable<Note>;
  }

getDescription(){
  return this.program = this.af.database.object('program') as FirebaseObjectObservable<Program>;
}

updateProgram(progInfo){
  return this.program.update(progInfo)
}

getSemester1(){
  return this.courses = this.af.database.list('courses/semester1') as FirebaseListObservable<CourseList[]>;
}

getSemester2(){
  return this.courses = this.af.database.list('courses/semester2') as FirebaseListObservable<CourseList[]>;
}

getTeacher(){
  return this.teachers = this.af.database.list('teachers') as FirebaseListObservable<Teacher[]>;
}

getComments(){
  return this.comments = this.af.database.list('comments') as FirebaseListObservable<Comment[]>;

}

addComment(comment){
  return this.comments.push(comment);
}

}

interface Program{

  description?:string;
  deadline?:string;
  title?:string;
}

interface CourseList{

  code?:string;
  description?:string;
  hours?:string;
  title?:string;
}

interface Teacher{

  name?:string;
  profile?:string;
}

interface Comment{

  commenter?:string;
  post?:string;
  timestamp?:string;
}
