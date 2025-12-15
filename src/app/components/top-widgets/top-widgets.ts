import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faDollarSign, faLocationDot, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './top-widgets.html',
  styleUrl: './top-widgets.scss',
})
export class TopWidgets {
  widgets = [
    { 
      icon: faLocationDot, 
      title: 'Locations', 
      value: 32, 
      bgColor: '#4548e4ff' 
    },
    { 
      icon: faStore, 
      title: 'Shops', 
      value: 295, 
      bgColor: '#f39c12' 
    },
    { 
      icon: faBox, 
      title: 'Products Sold', 
      value: 45784, 
      bgColor: '#7134a3ff' 
    },
    { 
      icon: faDollarSign, 
      title: 'Total Revenue', 
      value: 346928, 
      bgColor: '#0a682eff' 
    }
  ];

}
