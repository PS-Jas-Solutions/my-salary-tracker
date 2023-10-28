import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  navLinks: any[] = [
    {
      label: 'Spending',
      link: '/home/spending',
      index: 0
    },
    {
      label: 'Transactions',
      link: '/home/transaction',
      index: 1
    },
    {
      label: 'Categories',
      link: '/home/category',
      index: 2
    },
    {
      label: 'Accounts',
      link: '/home/account',
      index: 3
    },
  ];
  activeLinkIndex = -1;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}