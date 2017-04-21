import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { FirebaseService } from '../../providers/firebase-service';
import { EditPageDescription } from '../../pages/edit-page-description/edit-page-description';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    program: any;
    description: any;
    deadline: any;

  constructor(public navCtrl: NavController,
              public af:AngularFire,
              private firebaseService:FirebaseService
            ) {  }

  editPage(){
                        //console.log(id+" - "+title);
                        // push another page on to the navigation stack
                        // causing the nav controller to transition to the new page
                        // optional data can also be passed to the pushed page.

                        this.navCtrl.push(EditPageDescription, {
                          //id: id
                        //  name: "Carl"
                        });
                      }


  ngOnInit() {
                      this.firebaseService.getDescription().subscribe(program => {
                      console.log(program.description);
                      this.program = program;
                    });
          }

}
