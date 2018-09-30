import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: Http) {

   }

   public getContactDetails() {
    let _url: string = 'src/app/peopleData.json';
    return this._http.get(_url)
      .toPromise()
      .then(res => <any>res.json());

  }
}
