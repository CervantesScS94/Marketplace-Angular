import { Component, OnInit } from '@angular/core';
import { path } from '../../config.js';

@Component({
  selector: 'app-new-footer',
  templateUrl: './new-footer.component.html',
  styleUrls: ['./new-footer.component.css']
})
export class NewFooterComponent implements OnInit {

  path_url:String = path.url;

  constructor() { }

  ngOnInit(): void {
  }

}
