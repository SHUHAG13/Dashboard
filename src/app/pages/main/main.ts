import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { SideNav } from '../../components/side-nav/side-nav';
import { TopWidgets } from '../../components/top-widgets/top-widgets';
import { SalesByCategory } from '../../components/sales-by-category/sales-by-category';
import { SalesByMonth } from '../../components/sales-by-month/sales-by-month';
import { LastFewTransactions } from '../../components/last-few-transactions/last-few-transactions';
import { TopThreeProducts } from '../../components/top-three-products/top-three-products';

@Component({
  selector: 'app-main',
  imports: [CommonModule,Header,SideNav,TopWidgets,SalesByCategory,SalesByMonth,LastFewTransactions,TopThreeProducts],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
