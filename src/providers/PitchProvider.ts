
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers as TheHeaders } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseServiceProvider } from './BaseServiceProvider';
import { DateTime } from 'ionic-angular';

@Injectable()
export class PitchProvider extends BaseServiceProvider {
    public getListBigPitch() {
        return this.getData(this.host + "bigpitch", {});
    }
    public async getListSmallPitch(idBigPitch = 1) {
        return this.getData(this.host + "BigPitch/Children/" + idBigPitch, {});
    }
    public async searchPitchByName(namePitch) {
        return this.getData(this.host + "BigPitch/search?name=" + namePitch, {});
    }
    public async getListPitchOrder(id_big_pitch = null, date = Date.now()){
        //let id_big_pitch = 
        let lstPara = "";
        return this.getData(this.host + "smallpitch/findPitch?" + lstPara, {});
    }
}