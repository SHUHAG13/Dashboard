import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-sales-by-month',
  imports: [CommonModule,BaseChartDirective],
  templateUrl: './sales-by-month.html',
  styleUrl: './sales-by-month.scss',
})
export class SalesByMonth {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [85, 90, 100, 150, 180, 220, 270, 280, 250, 180, 150, 200],
        label: 'Arizona',
        fill: false,
        tension: 0.4,
        borderColor: '#0d4a4a',
        backgroundColor: '#0d4a4a',
        pointBackgroundColor: '#0d4a4a',
        pointRadius: 4
      },
      {
        data: [50, 60, 55, 60, 70, 80, 30, 90, 100, 110, 150, 200],
        label: 'Connecticut',
        fill: false,
        tension: 0.4,
        borderColor: '#dc3545',
        backgroundColor: '#dc3545',
        pointBackgroundColor: '#dc3545',
        pointRadius: 4
      },
      {
        data: [20, 30, 25, 35, 30, 28, 32, 50, 20, 45, 60, 70],
        label: 'Ohio',
        fill: false,
        tension: 0.4,
        borderColor: '#f39c12',
        backgroundColor: '#f39c12',
        pointBackgroundColor: '#f39c12',
        pointRadius: 4
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue in $'
        }
      }
    }
  };

  public lineChartType = 'line' as const;

}
