import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { FirebaseService } from '../../providers/firebase-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{

  courses1: any;
  courses2: any;


  constructor(public navCtrl: NavController,
              public af:AngularFire,
              private firebaseService:FirebaseService) {

  }

  ngOnInit() {
          this.firebaseService.getSemester1().subscribe(courses1 => {
          console.log(courses1);
          this.courses1 = courses1;
          })

          this.firebaseService.getSemester2().subscribe(courses2 => {
          console.log(courses2);
          this.courses2 = courses2;

        })

          ;
}

}
