import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChooseMonthYearComponent } from 'src/app/shared/components/choose-month-year/choose-month-year.component';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private readonly router:Router,
    public dialog: MatDialog,
    private readonly dataService: DataService
    ) {}
  public logoutProfileClicked() {
    this.router.navigateByUrl('auth/login');
  }
  public gotoViewProfile() {

  }
  public monthYearButtonClicked(enterAnimationDuration: string = '100ms', exitAnimationDuration: string = '50ms'): void {
    const selectedSpendingOption = this.dataService.getSelectedSpendingOption();
    const dialogRef = this.dialog.open(ChooseMonthYearComponent, {
      width: '80vw',
      // height: '40vh',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { name: 'Hello Popup', selectedSpendingOption },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
      this.dataService.setSelectedSpendingOption(result.selectedSpendingOption);
    });
  }

  public accountsList = [ 
    {
      accountName: 'Account 1',
      accountColor: 'red',
      accountId: 1
    }
  ];
}