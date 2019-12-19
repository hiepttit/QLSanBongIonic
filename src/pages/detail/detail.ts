import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PitchProvider } from '../../providers/PitchProvider';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  private data;
  private lstSmallPitch;
  constructor(public navCtrl: NavController,navParams: NavParams,public pitchProvider:PitchProvider) {
    this.data = navParams.get('data');
  }
  ionViewWillEnter(){
    //console.log(this.data);
    this.getListSmallPitch();
  }
  private async getListSmallPitch(){
    console.log("run");
    
    this.lstSmallPitch = await this.pitchProvider.getListSmallPitch(this.data.id);
  }
}
