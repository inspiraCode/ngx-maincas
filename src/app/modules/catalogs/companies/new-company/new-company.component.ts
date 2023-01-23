import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.sass']
})
export class NewCompanyComponent {
  companyForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      companyAlias: ['', Validators.required],
      companyName: ['', Validators.required],
      companyAddressLineOne: [''],
      companyAddressLineTwo: [''],
      companyAddressCountry: [''],
      companyAddressCity: [''],
      companyAddressState: [''],
      companyAddressZip: ['']
    });
  }

  addCompany() {
    console.log(this.companyForm.value);
    this.router.navigateByUrl('/dashboard/catalogs/companies');
  }
}
