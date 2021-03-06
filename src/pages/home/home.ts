import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { DetailPage } from '../detail/detail';
import { BookingPage } from '../booking/booking';
import { PitchProvider } from '../../providers/PitchProvider';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    private searchKey: string = "";
    private lstBigPitch: any;
    constructor(public navCtrl: NavController, public pitchProvider: PitchProvider,public loadingCtrl: LoadingController) {
        this.getFirstData();
    }
    async getFirstData() {
        let data = await this.pitchProvider.getListBigPitch();
        this.lstBigPitch = data;
    }
    async goToSearch(params) {
        if (!params) params = {};
        let data = await this.pitchProvider.searchPitchByName(this.searchKey);
        this.navCtrl.push(SearchPage, { searchKey: this.searchKey, data: data });
    }
    goToDetail(params) {
        if (!params) params = {};
        this.navCtrl.push(DetailPage, { data: params });
    }
    goToBooking(params) {
        if (!params) params = {};
        this.navCtrl.push(BookingPage,{data:params});
    }

    async viewData() {
        let res = await this.pitchProvider.getListSmallPitch();
        console.log(res);
    }
    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });      
        loading.present();      
        setTimeout(() => {
          loading.dismiss();
        }, 5000);
      }
}
