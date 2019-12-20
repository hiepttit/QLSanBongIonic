import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PitchProvider } from '../../providers/PitchProvider';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
  private data:any;
  private lstOrder;
  private idSmallPitch;
  constructor(public navCtrl: NavController, private navParams:NavParams,public pitchProvider:PitchProvider) {
    this.data = navParams.get('data');
    this.getListOrder();
  }
  private async getListOrder(){
    let lst = await this.pitchProvider.getListPitchOrder();
    this.lstOrder = lst;
  }
  private chooseSmallPitch(id){
    this.idSmallPitch = id;
  }
}
