import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: AccountComponent
  },
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },
  
];

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AccountModule { }
