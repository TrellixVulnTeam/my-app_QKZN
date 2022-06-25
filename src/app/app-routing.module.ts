import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureComponent } from './furniture/furniture.component';
import { FurnitureDescriptionComponent } from './furniture-description/furniture-description.component';

const routes: Routes = [
  { path: 'Start', component: FurnitureComponent },
  { path: '', redirectTo: '/Start', pathMatch: 'full' },
  { path: 'description/:id',component: FurnitureDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }