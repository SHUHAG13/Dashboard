import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-sales-by-category',
  imports: [BaseChartDirective,CommonModule],
  templateUrl: './sales-by-category.html',
  styleUrl: './sales-by-category.scss',
})
export class SalesByCategory {
   public pieChartData: ChartData<'pie'> = {
    labels: ['Electronics', 'Groceries', 'Cosmetics', 'Clothes', 'Appliances'],
    datasets: [{
      data: [40, 25, 15, 12, 8],
      backgroundColor: ['#0d4a4a', '#8b0000', '#7c3aed', '#f39c12', '#1a1a1a']
    }]
  };

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 15
        }
      }
    }
  };

  public pieChartType = 'pie'as const;

}
