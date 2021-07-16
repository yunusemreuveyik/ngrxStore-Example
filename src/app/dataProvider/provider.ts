import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { pageModel } from "../models/pageMode.model";

@Injectable()
export class dataProvider {

    private pages: Array<pageModel> = null;

    constructor(private http: HttpClient) {

    }

    public getData(): Array<pageModel> {
        return this.pages;
    }

    load() {
        return new Promise((resolve, reject) => {
            this.http.get("assets/data.json").subscribe(res=>{
                console.log('before init: : ', res);
            });
            
           return this.http.get("assets/data.json").subscribe((res:Array<pageModel>)=>{
            this.pages = res
            resolve(true);
           });
        })
    }
}