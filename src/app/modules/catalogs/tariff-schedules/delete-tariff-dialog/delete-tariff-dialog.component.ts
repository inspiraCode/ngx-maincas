import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-tariff-dialog',
  templateUrl: './delete-tariff-dialog.component.html',
  styleUrls: ['./delete-tariff-dialog.component.sass']
})
export class DeleteTariffDialogComponent implements OnInit {
  confirmText = "";
  deleteRowTariffName = "";
  constructor(
    @Inject(MAT_DIALOG_DATA) public deleteData: any,
    private dialogRef: MatDialogRef<DeleteTariffDialogComponent>,
    private api: ApiService) { }

  ngOnInit(): void {
    this.deleteRowTariffName = this.deleteData.code;
  }

  deleteRow() {
    this.api.deleteTariffById(this.deleteData.id).subscribe({
      next: (response) => {
        this.dialogRef.close({
          'result': 'deleted',
          'payload': response
        });
      },
      error: (response) => {
        console.error(response);
        this.dialogRef.close({
          'result': 'failed',
          'payload': response
        });
      }
    });
  }
}
