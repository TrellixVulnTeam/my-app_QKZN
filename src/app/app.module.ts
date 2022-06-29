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
import { AdminEdtComponent } from './admin-edt/admin-edt.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FurnitureComponent,
    FurnitureDescriptionComponent,
    FilterPipe,
    HeaderComponent,
    AdminViewComponent,
    AdminEdtComponent 
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
    MatSortModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
