import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model.js';
import { CategoriesService } from 'src/app/services/categories.service.js';
import { path } from '../../config.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path_url:String = path.url;
  categories:Categorie[];
  arrayTileList:Array<any> = [];
  constructor(
    private _categoriesSevice:CategoriesService
  ) {

  }

  ngOnInit(): void {
    this._categoriesSevice.getData()
      .subscribe((response:Categorie[]) => {
        this.categories = response;

        //===============================================
        // Recorremos la coleccion de categories para tomar la lista de los Titulos
        //===============================================
        this.arrayTileList = this.categories.map((element) => {
          return element.title_list;
        });

        console.log(this.arrayTileList);

      })
  }

}
