import { BillPage } from './../bill/bill';
import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from "./../card/card";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  flag2: boolean = true;
  arr: string[] = [
    'Electricity', 'Restaurant', 'Daily Expenses','Clothes','Fuel','Miscellaneous'
  ];
  constructor(public navCtrl: NavController) {


  }
  onhide() {
    if (this.flag2 == false) {
      this.flag2 = true;
    }
    else {
      this.flag2 = false;
    }
  }

  onCard() {
    this.navCtrl.push(CardPage);
  }
  onContact() {
    this.navCtrl.push(ContactPage);
  }
  onBill() {
    this.navCtrl.push(BillPage);
  }
}
