import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { FirebaseService } from '../../providers/firebase-service';
//import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the Feedback page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class Feedback {

  notes: any;

  comment: any;
  commenter:any;
  post:any;
  timestamp:any;

  constructor(public navCtrl: NavController,
              public af:AngularFire,
              private firebaseService:FirebaseService) {
  }

  ngOnInit() {
              this.firebaseService.getComments().subscribe(notes => {
              console.log(notes);
              this.notes = notes;
            });
  }

  onAddSubmit(){
      console.log(Date());
      var now = new Date();
      var now_utc = now.getUTCDate() +"/"+ now.getUTCMonth() +"/"+ now.getUTCFullYear();


      let comment = {
        commenter: this.commenter,
        post: this.post,
        timestamp: now_utc

}
console.log(comment);
console.log(now_utc);
this.firebaseService.addComment(comment);
this.comment.reset();
//this.navCtrl.push(HomePage);


}

}
