import { Component, Input, OnInit } from '@angular/core';
import { SubCategorie } from 'src/app/models/categorie.model';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  @Input() titleList:string;
  SubCategories:SubCategorie[] = [];

  constructor(
    private _subCategoriesService:SubCategoriesService
  ) { }
  
  ngOnInit(): void {
    this._subCategoriesService
        .getFilterData("title_list",this.titleList)
        .subscribe(response => {
          this.SubCategories = Object.keys(response).map(item => {
            return {
              name        : response[item].name,
              title_list  : response[item].title_list 
            }
          });
        });
  }//ngOnInit()
}
