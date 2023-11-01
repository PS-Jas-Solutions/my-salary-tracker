import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-choose-month-year',
  templateUrl: './choose-month-year.component.html',
  styleUrls: ['./choose-month-year.component.scss']
})
export class ChooseMonthYearComponent implements OnInit {
  public showSpending = 'monthly';
  public showSpendingOptions = [
    {
      id: 'monthly',
      name:'Monthly'
    },
    {
      id: 'yearly',
      name:'Yearly'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<ChooseMonthYearComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any    
  ) {}
  
  ngOnInit(): void {
    this.showSpending = this.data?.selectedSpendingOption || 'monthly';
  }
  public closePopup(): void {
    this.dialogRef.close();
  }
  public showSpendingSelected(selectedOption: string): void {    
    this.dialogRef.close({selectedSpendingOption: selectedOption});
  }
}
