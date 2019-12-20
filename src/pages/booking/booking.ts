import { Component } from '@angular/core';
import { NavController, NavParams, DateTime } from 'ionic-angular';
import { PitchProvider } from '../../providers/PitchProvider';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
  private data:any;
  private lstOrder;
  private idSmallPitch:any=0;
  private date:string;
  private startTime:string="";
  private endTime:string="";
  private lstPitchFree;
  constructor(public navCtrl: NavController, private navParams:NavParams,public pitchProvider:PitchProvider) {
    this.date= new Date().toISOString();
    this.data = navParams.get('data');
    // this.getListOrder();
  }
  private async getListOrder(){
    let lst = await this.pitchProvider.getListPitchOrder(this.date,this.startTime,this.endTime);
    this.lstPitchFree = lst;
  }
  private chooseSmallPitch(id){
    this.idSmallPitch = id;
  }
  private booking(){

  }
}
