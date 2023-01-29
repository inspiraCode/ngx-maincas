import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.sass']
})
export class NewCompanyComponent {
  companyForm !: FormGroup;
  rolesList: string[] = ['AUDITOR', 'BROKER', 'BUYER', 'CARRIER', 'CONSIGNEE', 'CONSULTANT', 'CUSTOMER', 'PAYER', 'SELLER', 'SHIPPER'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      alias: ['', Validators.required],
      name: ['', Validators.required],
      addressLineOne: [''],
      addressLineTwo: [''],
      addressCountry: [''],
      addressCity: [''],
      addressState: [''],
      addressZip: [''],
      roles: [''],
      block: [false]
    });
  }

  addCompany() {
    if (this.companyForm.valid) {
      this.api.postCompany(this.companyForm.value).subscribe({
        next: (res) => {
          this.notifyService.showSuccess("Compañía Agregada", "Una compañía ha sido agregada con éxito");
          this.router.navigateByUrl('/dashboard/catalogs/companies');
        },
        error: (errData) => {
          console.error(errData);
          this.notifyService.showError("Error Técnico", "Error técnico al cargar datos, intente de nuevo");
        }
      });
    } else {
      this.notifyService.showWarning("Validación", "Los datos ingresados no son válidos para el sistema");
      console.error("Not a valid form");
    }
  }
}
