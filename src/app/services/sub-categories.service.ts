import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {
  private api:String = Api.url;
  constructor(
    private _http:HttpClient
  ) { }

  getFilterData(orderBy:string, equalTo){
    return this._http.get(`${this.api}sub-categories.json?orderBy="${orderBy}"&equalTo="${equalTo}"&print=pretty`);
  }
}
