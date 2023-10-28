import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
// import { ExpenseDashboardComponent } from './expense-dashboard/expense-dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { SpendingComponent } from './spending/spending.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  // {
  //   path: 'spending'
  // }
];
@NgModule({
  declarations: [
    HomeComponent,
    // ExpenseDashboardComponent,
    TransactionComponent,
    CategoryComponent,
    AccountComponent,
    SpendingComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CoreModule
  ]
})
export class HomeModule { }
