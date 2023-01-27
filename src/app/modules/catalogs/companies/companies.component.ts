import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './services/api.service';

import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {
  title = 'toaster-not';
  displayedColumns: string[] = ['actions', 'name', 'alias', 'addressCountry', 'addressState', 'addressCity', 'roles'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.api.getCompany().subscribe({
      next: (response) => {
        this.paginator._intl.itemsPerPageLabel = "Compañías por página";
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (errData) => {
        console.error(errData);
        this.notifyService.showError("Error técnico", "Error al cargar datos, intente de nuevo");
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
