import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { FurnitureDescriptionComponent } from './furniture-description/furniture-description.component';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {MatSortModule} from '@angular/material/sort';
import { AdminViewComponent } from './admin-view/admin-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FurnitureComponent,
    FurnitureDescriptionComponent,
    FilterPipe,
    HeaderComponent,
    AdminViewComponent 
    ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
