import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-block-company-dialog',
  templateUrl: './block-company-dialog.component.html',
  styleUrls: ['./block-company-dialog.component.sass']
})
export class BlockCompanyDialogComponent implements OnInit {
  confirmText = "";
  rowCompanyName = "";
  constructor(
    @Inject(MAT_DIALOG_DATA) public company: any,
    private dialogRef: MatDialogRef<BlockCompanyDialogComponent>,
    private api: ApiService) { }

  ngOnInit(): void {
    this.rowCompanyName = this.company.name;
  }

  blockRow() {
    this.api.getCompanyById(this.company.id).subscribe({
      next: (dbCompany) => {
        dbCompany.block = !dbCompany.block;
        this.api.updateCompany(this.company.id, dbCompany).subscribe({
          next: (response) => {
            this.dialogRef.close({
              'result': 'blocked',
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
      },
      error: (errData) => {
        console.error(errData);
        this.dialogRef.close({
          'result': 'failed',
          'payload': errData
        });
      }
    });
    
  }
}
