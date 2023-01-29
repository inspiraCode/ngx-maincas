import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-tariff',
  templateUrl: './new-tariff.component.html',
  styleUrls: ['./new-tariff.component.sass']
})
export class NewTariffComponent {
  tariffForm !: FormGroup;
  tariffName = '';
  ustList: string[] = ["Kg", "Lbs"];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.tariffForm = this.formBuilder.group({
      code: ['', Validators.required],
      ust: ['', Validators.required],
      baseDescription: ['', Validators.required],
      documentDescription: [],
      observations: []
    });
  }

  addTariff() {
    if (this.tariffForm.valid) {
      this.api.postTariff(this.tariffForm.value)
        .subscribe({
          next: (res) => {
            this.notifyService.showSuccess("Fracci&oacute;n Actualizada", "Los datos de la fracci&oacute; han sido actualizados con éxito");
            this.router.navigateByUrl('/dashboard/catalogs/tariffs');
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
