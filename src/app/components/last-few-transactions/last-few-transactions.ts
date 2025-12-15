import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Transaction {
  image: string;
  name: string;
  price: string;
  shop: string;
  location: string;
  status: string;
  statusClass: string;
}

@Component({
  selector: 'app-last-few-transactions',
  imports: [CommonModule],
  templateUrl: './last-few-transactions.html',
  styleUrl: './last-few-transactions.scss',
})

export class LastFewTransactions {

  
  defaultImage ='assets/images/blackcode.jpg';

  transactions: Transaction[] = [
    {
      image: 'assets/images/products/ryzen.jpg',
      name: 'Ryzen 5 Processor',
      price: '$299',
      shop: 'Tech Pro',
      location: 'East Hartford',
      status: 'PENDING',
      statusClass: 'status-pending'
    },
    {
      image: 'assets/images/products/blackcode.jpg',
      name: 'Denver Blackcode',
      price: '$789',
      shop: 'Pick the best',
      location: 'Miamisburg',
      status: 'SHIPPED',
      statusClass: 'status-shipped'
    },
    {
      image: 'assets/images/products/nike-shoes.jpg',
      name: 'Nike Shoes',
      price: '$650',
      shop: 'Quality Leathers',
      location: 'Columbus',
      status: 'CONFIRMED',
      statusClass: 'status-confirmed'
    },
    {
      image: 'assets/images/products/thinkpad.jpg',
      name: 'Lenovo Thinkpad E15',
      price: '$899',
      shop: 'Tech World',
      location: 'Cleveland',
      status: 'DELIVERED',
      statusClass: 'status-delivered'
    }
  ];

  onImageError(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = this.defaultImage;
  }

}
