import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowproductComponent } from './showproduct/showproduct.component';

const routes: Routes = [
  {path : 'showproduct', component: ShowproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
