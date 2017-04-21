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
export class EditPageDescription {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPageDescription');
  }

}
