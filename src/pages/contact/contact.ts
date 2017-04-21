import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { FirebaseService } from '../../providers/firebase-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

  teachers: any;
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController,
              public af:AngularFire,
              private firebaseService:FirebaseService) {

  }

  ngOnInit() {
              this.firebaseService.getTeacher().subscribe(teachers => {
              console.log(teachers);
              this.teachers = teachers;
            });
  }

  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.teachers = this.teachers.filter((teachers) => {
        return (teachers.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
