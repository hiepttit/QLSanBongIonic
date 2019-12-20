import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { DetailPage } from '../detail/detail';
import { BookingPage } from '../booking/booking';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  } goToSearch(params) {
    if (!params) params = {};
    this.navCtrl.push(SearchPage);
  } goToDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(DetailPage);
  } goToBooking(params) {
    if (!params) params = {};
    this.navCtrl.push(BookingPage);
  }
}
