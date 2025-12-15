import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTachometerAlt, faMapMarkerAlt, faStore, faBox, faMoneyBill, faChartBar, faAddressBook, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
  faDashboard = faTachometerAlt;
  faLocation = faMapMarkerAlt;
  faShop = faStore;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faAddressBook;
  faHand = faHandHoldingHeart;

  navItems = [
    { icon: this.faDashboard, label: 'Dashboard', active: true },
    { icon: this.faLocation, label: 'Locations', active: false },
    { icon: this.faShop, label: 'Shops', active: false },
    { icon: this.faBox, label: 'Products', active: false },
    { icon: this.faMoneyBill, label: 'Sales', active: false },
    { icon: this.faChartBar, label: 'Statistics', active: false },
    { icon: this.faContactBook, label: 'Contact', active: false },
    { icon: this.faHand, label: 'Help', active: false }
  ];

}
