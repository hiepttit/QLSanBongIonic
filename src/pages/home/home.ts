import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { DetailPage } from '../detail/detail';
import { BookingPage } from '../booking/booking';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToSearch(params){
    if (!params) params = {};
    this.navCtrl.push(SearchPage);
  }goToDetail(params){
    if (!params) params = {};
    this.navCtrl.push(DetailPage);
  }goToBooking(params){
    if (!params) params = {};
    this.navCtrl.push(BookingPage);
  }
}
