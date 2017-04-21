import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseService} from '../../providers/firebase-service'
import * as firebase from 'firebase';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the EditPageDescription page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-page-description',
  templateUrl: 'edit-page-description.html',
})
export class EditPageDescription implements OnInit {

  title: any;
  description: any;
  deadline: any;
  program: any;
  HomePage: HomePage;

  constructor(private FirebaseService: FirebaseService,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPageDescription');
  }

  ngOnInit() {
//this.id = this.route.snapshot.params['id'];

this.FirebaseService.getDescription().subscribe(program => {
  this.program = program;
  this.title = program.title;
  this.description = program.description;
  this.deadline = program.deadline;
})
}

onEditSubmit(){
let program = {
  title: this.title,
  description: this.description,
  deadline: this.deadline
}

this.FirebaseService.updateProgram(program);
this.navCtrl.push(HomePage);
}

}
