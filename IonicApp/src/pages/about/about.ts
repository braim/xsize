import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
currentSize:number;
  constructor(public navCtrl: NavController,private navParams:NavParams) {
      var s = this.navParams.get('size');
      this.currentSize = s;
      
  }

}
