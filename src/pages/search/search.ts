import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PitchProvider } from '../../providers/PitchProvider';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  private searchKey;
  private data;
  constructor(public navCtrl: NavController, navParams: NavParams, public pitchProvider: PitchProvider) {
    this.searchKey = navParams.get('searchKey');
    this.data = navParams.get('data');
  }
  OnInit() {
    console.log(this.searchKey);
  }
  async ionViewWillEnter() {
    //let res = await this.pitchProvider.searchPitchByName(this.searchKey);
    console.log(this.data);

  }
  private async getDetail(input) {
    let pitchChoose = input;
    this.navCtrl.push(DetailPage, { data: pitchChoose })
  }
}
