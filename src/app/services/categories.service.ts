import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private api:String = Api.url;

  constructor(
    private _http:HttpClient
  ) { }

  getData(){
    return this._http.get(`${this.api}categories.json`);
  }
}
