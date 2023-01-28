import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-company-dialog',
  templateUrl: './delete-company-dialog.component.html',
  styleUrls: ['./delete-company-dialog.component.sass']
})
export class DeleteCompanyDialogComponent implements OnInit {
  confirmText = "";
  deleteRowCompanyName = "";
  constructor(
    @Inject(MAT_DIALOG_DATA) public deleteData: any,
    private dialogRef: MatDialogRef<DeleteCompanyDialogComponent>,
    private api: ApiService) { }

  ngOnInit(): void {
    this.deleteRowCompanyName = this.deleteData.name;
  }

  deleteRow() {
    this.api.deleteCompanyById(this.deleteData.id).subscribe({
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
