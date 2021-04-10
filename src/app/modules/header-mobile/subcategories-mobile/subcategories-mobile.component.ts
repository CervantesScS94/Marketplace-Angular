import { Component, Input, OnInit } from '@angular/core';
import { SubCategorie } from 'src/app/models/categorie.model';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-subcategories-mobile',
  templateUrl: './subcategories-mobile.component.html',
  styleUrls: ['./subcategories-mobile.component.css']
})
export class SubcategoriesMobileComponent implements OnInit {

  @Input() title_list: string;
  subCategoriesArray: SubCategorie[];

  constructor(
    private _subCategoriesService: SubCategoriesService
  ) { }

  ngOnInit(): void {
    this._subCategoriesService
      .getFilterData("title_list", this.title_list)
      .subscribe((response: Array<any>) => {
        //===============================================
        // Activamos el efecto toggle en el listado de categorias
        //===============================================
        $(document).on('click','.sub-toggle', function(){
          $(this).parent().children('ul').show()
        });
        
        this.subCategoriesArray = Object.keys(response).map(item => {
          return {
            name: response[item].name,
            title_list: response[item].title_list
          }
        });
      });
  }

}
