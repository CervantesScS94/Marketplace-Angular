import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './modules/header/header.component';
import { HeaderPromotionComponent } from './modules/header-promotion/header-promotion.component';
import { HeaderMobileComponent } from './modules/header-mobile/header-mobile.component';
import { NewLetterComponent } from './modules/new-letter/new-letter.component';
import { NewFooterComponent } from './modules/new-footer/new-footer.component';
import { SubcategoriesComponent } from './modules/header/subcategories/subcategories.component';
import { SubcategoriesMobileComponent } from './modules/header-mobile/subcategories-mobile/subcategories-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPromotionComponent,
    HeaderMobileComponent,
    NewLetterComponent,
    NewFooterComponent,
    SubcategoriesComponent,
    SubcategoriesMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
