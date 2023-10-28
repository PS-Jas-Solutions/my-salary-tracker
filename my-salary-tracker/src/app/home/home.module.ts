import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
// import { ExpenseDashboardComponent } from './expense-dashboard/expense-dashboard.component';
// import { TransactionComponent } from './transaction/transaction.component';
// import { CategoryComponent } from './category/category.component';
// import { AccountComponent } from './account/account.component';
// import { SpendingComponent } from './spending/spending.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'spending',
        loadChildren: () => import('./spending/spending.module').then(m => m.SpendingModule)
      },
      {
        path: 'transaction',
        loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
      },
      {
        path: '', redirectTo: 'spending', pathMatch: 'full'
      },
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  
];
@NgModule({
  declarations: [
    HomeComponent,
    // ExpenseDashboardComponent,
    // TransactionComponent,
    // CategoryComponent,
    // AccountComponent,
    // SpendingComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CoreModule
  ]
})
export class HomeModule { }
