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

  //program: FirebaseListObservable<any[]>;
  program: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
    //this.program = this.af.database.list('program') as FirebaseListObservable<Program[]>;
    //this.note = this.af.database.object('/notes/'+id) as FirebaseObjectObservable<Note>;
  }

  getDescription(){
    return this.program = this.af.database.object('program') as FirebaseObjectObservable<Program>;;
}

}

interface Program{

  description?:string;
  deadlines?:string;
}
