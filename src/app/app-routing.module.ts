import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureComponent } from './furniture/furniture.component';
import { FurnitureDescriptionComponent } from './furniture-description/furniture-description.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  { path: 'CostumerView', component: FurnitureComponent },
  { path: '', redirectTo: '/CostumerView', pathMatch: 'full' },
  { path: 'description/:id',component: FurnitureDescriptionComponent},
  {path: 'AdminView', component: AdminViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }