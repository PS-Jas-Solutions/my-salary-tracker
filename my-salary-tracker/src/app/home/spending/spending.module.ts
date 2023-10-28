import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SpendingComponent } from './spending.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: SpendingComponent
  },
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },
  
];

@NgModule({
  declarations: [SpendingComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SpendingModule { }
