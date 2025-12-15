import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Product {
  name: string;
  value: number;
  color: string;
}
@Component({
  selector: 'app-top-three-products',
  imports: [CommonModule],
  templateUrl: './top-three-products.html',
  styleUrl: './top-three-products.scss',
})
export class TopThreeProducts {
  topProducts: Product[] = [
    { name: 'Lenovo Thinkpad E15', value: 450, color: '#0d4a4a' },
    { name: 'Nectar Orange Juice', value: 380, color: '#8b0000' },
    { name: 'Axe Deodorant', value: 250, color: '#f39c12' }
  ];

  maxProductValue = 450;

  getPercentage(value: number): number {
    return (value / this.maxProductValue) * 100;
  }

}
