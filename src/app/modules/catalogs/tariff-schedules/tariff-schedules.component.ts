import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './services/api.service';

import { NotificationService } from 'src/app/notification.service';
import { DeleteTariffDialogComponent } from './delete-tariff-dialog/delete-tariff-dialog.component';

@Component({
  selector: 'app-tariff-schedules',
  templateUrl: './tariff-schedules.component.html',
  styleUrls: ['./tariff-schedules.component.sass']
})
export class TariffSchedulesComponent implements OnInit {
  displayedColumns: string[] = ['actions', 'code', 'ust', 'baseDescription'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api: ApiService,
    private notifyService: NotificationService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTariffsReport();
  }

  openDeleteDialog(row: any) {
    const dialogRef = this.dialog.open(DeleteTariffDialogComponent, {
      width: '30%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      if (result.result === 'deleted') {
        this.notifyService.showSuccess("Fracción borrada", "La fracción ha sido borrada con éxito.");
        this.getTariffsReport();
      } else {
        this.notifyService.showError("Error técnico", "No se pudo borrar la fracción seleccionada");
      }
    });
  }

  getTariffsReport() {

    this.api.getTariff().subscribe({
      next: (response) => {
        this.paginator._intl.itemsPerPageLabel = "Fracciones por página";
        
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
