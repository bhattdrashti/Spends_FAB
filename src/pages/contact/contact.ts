import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddContactPage } from "../add-contact/add-contact";
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onAddContact()
  {
    this.navCtrl.push(AddContactPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
