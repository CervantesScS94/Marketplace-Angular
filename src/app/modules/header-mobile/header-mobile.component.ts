import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model.js';
import { CategoriesService } from 'src/app/services/categories.service.js';
import { path } from '../../config.js';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  path_url:String = path.url;
  categories:Categorie[] = [];
  arrayTileList:Array<any> = [];

  constructor(
    private categoryService:CategoriesService
  ) { }

  ngOnInit(): void {
    //===============================================
    // Tomamos la data de las categorias
    //===============================================
    this.categoryService.getData()
      .subscribe((response:Categorie[]) => {
        this.categories = response;

        //===============================================
        // Activamos el efecto toggle en el listado de categorias
        //===============================================
        $(document).on('click','.sub-toggle', function(){
          $(this).parent().children('ul').toggle("fast");
        });

        this.arrayTileList = this.categories.map((element) => {
          let title_list = element.title_list;
          return JSON.parse(title_list);
        });

        console.log(this.arrayTileList)
      })
  }

}
