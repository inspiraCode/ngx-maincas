import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/notification.service';
import { DeleteMaterialDialogComponent } from './delete-material-dialog/delete-material-dialog.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.sass']
})
export class MaterialsComponent implements OnInit {
  displayedColumns: string[] = ['actions', 'commercialDescription', 'buyerName', 'sellerName', 'tariffScheduleCode', 'tariffScheduleUst', 'approvedImport'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api: ApiService,
    private notifyService: NotificationService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllMaterials();
  }

  openDeleteDialog(row: any) {
    const dialogRef = this.dialog.open(DeleteMaterialDialogComponent, {
      width: '30%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      if (result.result === 'deleted') {
        this.notifyService.showSuccess("Material borrado", "El material ha sido borrado con éxito.");
        this.getAllMaterials();
      } else {
        this.notifyService.showError("Error técnico", "No se pudo borrar el material seleccionado");
      }
    });
  }

  getAllMaterials() {
    this.api.getMaterial().subscribe({
      next: (response) => {
        this.paginator._intl.itemsPerPageLabel = "Materiales por página";
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