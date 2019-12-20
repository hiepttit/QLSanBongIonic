
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
    public async getListPitchOrder(date = new Date().toISOString(), startTime = null, endTime = null,id_big_pitch = null){
        //let id_big_pitch = 
        let lstPara = "date="+date+"&startTime="+startTime+"&endTime="+endTime;
        return this.getData(this.host + "smallpitch/findPitch?" + lstPara, {});
    }
    public async bookingPitch(parameters){
        let para = "id_orderer="+1;
        para+="&id_pitch="+parameters.idSmallPitch;
        para+="&start_time="+parameters.idSmallPitch;
        para+="&end_time="+parameters.idSmallPitch;
    }
}