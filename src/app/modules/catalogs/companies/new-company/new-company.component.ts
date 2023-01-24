import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.sass']
})
export class NewCompanyComponent {
  companyForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      alias: ['', Validators.required],
      name: ['', Validators.required],
      addressLineOne: [''],
      addressLineTwo: [''],
      addressCountry: [''],
      addressCity: [''],
      addressState: [''],
      addressZip: ['']
    });
  }

  addCompany() {
    if (this.companyForm.valid) {
      this.api.postCompany(this.companyForm.value).subscribe({
        next: (res) => {
          alert("Compañía agregada con éxito");
          this.router.navigateByUrl('/dashboard/catalogs/companies');
        },
        error: (errData) => {
          console.error(errData);
          alert("Error técnico al cargar datos, intente de nuevo");
        }
      });
    } else {
      alert("Valide los valores ingresados.");
      console.error("Not a valid form");
    }
  }
}
