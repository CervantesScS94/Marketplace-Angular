import { Component, OnInit } from '@angular/core';
import { path } from '../../config.js';

import { ProductsService } from 'src/app/services/products.service.js';
import { ThrowStmt } from '@angular/compiler';
import { Top_Banner, Test_Banner } from 'src/app/models/top-banner.model.js';

@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css']
})
export class HeaderPromotionComponent implements OnInit {

  path_url:String = path.url;
  top_banner:Top_Banner;
  test_banner:Test_Banner;
  preload:Boolean = false;

  constructor(
    private _productService : ProductsService
  ) {
    this.top_banner = {
      IMG     :"",
      H3      :"",
      H4      :"",
      P1      :"",
      P2      :"",
      SPAN    :"",
      BUTTON  :"",
    }
  }

  ngOnInit(): void {
    this.preload = true;

    this._productService.getData()
      .subscribe((response) => {
        // Tomar la longitud del objeto
        let size = 0;
        size = Object.keys(response).length;

        // Generar un numero aleatorio
        let index = Math.floor( Math.random() * size);

        // Devolvemos a la vista un banner aleatorio
        let result = JSON.parse(response[Object.keys(response)[index]].top_banner);
        this.top_banner = {
          IMG     : result["IMG tag"],
          H3      : result["H3 tag"],
          H4      : result["H4 tag"],
          P1      : result["P1 tag"],
          P2      : result["P2 tag"],
          SPAN    : result["Span tag"],
          BUTTON  : result["Button tag"]
        }

        this.preload = false
      });
  }
}
