import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.sass']
})
export class EditCompanyComponent implements OnInit {
  companyForm !: FormGroup;
  companyName = '';
  rolesList: string[] = ['AUDITOR', 'BROKER', 'BUYER', 'CARRIER', 'CONSIGNEE', 'CONSULTANT', 'CUSTOMER', 'PAYER', 'SELLER', 'SHIPPER'];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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
    this.api.getCompanyById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe({
        next: (response) => {
          let roles = [];
          if (response.roles) {
            roles = response.roles.split(',');
          }
          this.companyForm = this.formBuilder.group({
            alias: [response.alias, Validators.required],
            name: [response.name, Validators.required],
            addressLineOne: [response.addressLineOne],
            addressLineTwo: [response.addressLineTwo],
            addressCountry: [response.addressCountry],
            addressCity: [response.addressCity],
            addressState: [response.addressState],
            addressZip: [response.addressZip],
            roles: [roles],
            block: [response.block]
          });
          this.companyName = response.name;
        },
        error: (errData) => {
          console.error(errData);
          this.notifyService.showError("Error T??cnico", "Error t??cnico al cargar datos, intente de nuevo");
          this.router.navigateByUrl('/dashboard/catalogs/companies');
        }
      });
  }

  saveCompany() {
    if (this.companyForm.valid) {
      this.api.updateCompany(Number(this.route.snapshot.paramMap.get('id')), this.companyForm.value)
        .subscribe({
          next: (res) => {
            this.notifyService.showSuccess("Compa????a Actualizada", "Los datos de la compa????a han sido actualizados con ??xito");
            this.router.navigateByUrl('/dashboard/catalogs/companies');
          },
          error: (errData) => {
            console.error(errData);
            this.notifyService.showError("Error T??cnico", "Error t??cnico al cargar datos, intente de nuevo");
          }
        });
    } else {
      this.notifyService.showWarning("Validaci??n", "Los datos ingresados no son v??lidos para el sistema");
      console.error("Not a valid form");
    }
  }
}
