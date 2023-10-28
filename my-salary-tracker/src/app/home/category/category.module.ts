import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: CategoryComponent
  },
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },
  
];

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CategoryModule { }
