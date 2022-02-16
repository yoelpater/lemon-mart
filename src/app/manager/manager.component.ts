import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-manager',
  template: `
    <mat-toolbar color="accent">
      <a mat-button routerLink="/manager/home" routerLinkActive="active-link">
        Manager's Dashboard
      </a>
      <a mat-button routerLink="/manager/users" routerLinkActive="active-link">
        User Management
      </a>
      <a mat-button routerLink="/manager/receipts" routerLinkActive="active-link">
        Receipt Lookup
      </a>
      <span class="flex-spacer"></span>
      <button
        mat-mini-fab
        routerLink="/inventory"
        matTooltip="Inventory"
        aria-label="Inventory"
      >
        <mat-icon>list</mat-icon>
      </button>
      <button mat-mini-fab routerLink="/pos" matTooltip="POS" aria-label="POS">
        <mat-icon>shopping_cart</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class ManagerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
