import { Component, OnInit } from '@angular/core';
import { Categorie, SubCategorie, TileNameView } from 'src/app/models/categorie.model.js';
import { CategoriesService } from 'src/app/services/categories.service.js';
import { SubCategoriesService } from 'src/app/services/sub-categories.service.js';
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
  render:Boolean = true;

  constructor(
    private _categoriesSevice:CategoriesService,
    private _subCategoriesSevice:SubCategoriesService
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
          let title_list = element.title_list;
          return JSON.parse(title_list);
        });
      })
  }

  //===============================================
  // Funcion que  nos avisa cuando finaliza el reenderizado del callback
  //===============================================
  callback(){

    if(this.render){
      this.render = false;
      let arraySubCategories = [];

      //===============================================
      // Hacemos un recorrido por la lista de titulos
      //===============================================
      this.arrayTileList.forEach(element => {
        //===============================================
        // Seperar individualmente los titulos
        //===============================================

        for(let i in element){
          this._subCategoriesSevice
            .getFilterData("title_list",element[i])
            .subscribe((response) => {
              
              arraySubCategories.push(response);
              //===============================================
              // Hacemos un recorrido por la coleccion general de subcategorias
              //===============================================
              
              let arrayTileName = [];
              for(let f in arraySubCategories){
                
                //===============================================
                // Hacemos un nuevo array de objectos clasifiacdo 
                // cada subcategoria cpn la respectica lista del titulo
                //===============================================
                for(let g in arraySubCategories[f]){
                  arrayTileName.push({
                    titleList:arraySubCategories[f][g].title_list,
                    subCategory:arraySubCategories[f][g].name
                  })
                }
              }
            });
        }
      })
    }
  }//Callback()
}
