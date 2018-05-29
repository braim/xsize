import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;
  constructor(public navCtrl: NavController) {
    this.items = [0,1,2,3,5,8,13,21,40];
  }
  clickcard(item){
    
    this.navCtrl.push(AboutPage,{"size":item});
  }

}
