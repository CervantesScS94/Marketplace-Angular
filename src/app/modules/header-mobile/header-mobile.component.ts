import { Component, OnInit } from '@angular/core';
import { path } from '../../config.js';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  path_url:String = path.url;

  constructor() { }

  ngOnInit(): void {
  }

}
