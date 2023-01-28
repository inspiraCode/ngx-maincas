import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './services/api.service';

import { NotificationService } from 'src/app/notification.service';
import { DeleteCompanyDialogComponent } from './delete-company-dialog/delete-company-dialog.component';
import { BlockCompanyDialogComponent } from './block-company-dialog/block-company-dialog.component';

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

  constructor(
    private api: ApiService,
    private notifyService: NotificationService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  openDeleteDialog(row: any) {
    const dialogRef = this.dialog.open(DeleteCompanyDialogComponent, {
      width: '30%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      if (result.result === 'deleted') {
        this.notifyService.showSuccess("Compañía borrada", "La compañía ha sido borrada con éxito.");
        this.getAllCompanies();
      } else {
        this.notifyService.showError("Error técnico", "No se pudo borrar la compañía seleccionada");
      }
    });
  }

  openBlockDialog(row: any) {
    const dialogRef = this.dialog.open(BlockCompanyDialogComponent, {
      width: '30%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      if (result.result === 'blocked') {
        this.notifyService.showSuccess("Bloque de Compañía", "La propiedad de bloqueo de la compañía ha sido modificado.");
        this.getAllCompanies();
      } else {
        this.notifyService.showError("Error técnico", "No se pudo cambiar el bloqueo de la compañía, intente nuevamente.");
      }
    });
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
