import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: TransactionComponent
  },
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },
  
];

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class TransactionModule { }
