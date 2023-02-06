import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { NotificationService } from 'src/app/notification.service';
import { Company } from '../../companies/model/company.model';
import { ApiService as CompanyApiService } from '../../companies/services/api.service';
import { TariffSchedule } from '../../tariff-schedules/model/tariff.model';
import { ApiService as TariffApiService } from '../../tariff-schedules/services/api.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.sass']
})
export class EditMaterialComponent implements OnInit {
  materialId = 0;
  materialForm !: FormGroup;
  filteredSellers: Observable<any> | undefined;
  filteredBuyers: Observable<any> | undefined;
  filteredTariffs: Observable<any> | undefined;
  filteredSedTariffs: Observable<any> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private companyApi: CompanyApiService,
    private tariffApi: TariffApiService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
    this.materialForm = this.formBuilder.group({
      seller: ['', Validators.required],
      buyer: ['', Validators.required],
      approvedImpo: [true],
      legalDescription: ['', Validators.required],
      commercialDescription: ['', Validators.required],
      sedDescription: ['', Validators.required],
      tariffSchedule: ['', Validators.required],
      sedTariffSchedule: ['', Validators.required],
      observations: ['']
    });

    this.materialId = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getMaterialById(this.materialId)
      .subscribe({
        next: data => {
          this.materialForm = this.formBuilder.group({
            seller: [data.seller, Validators.required],
            buyer: [data.buyer, Validators.required],
            approvedImpo: [data.approvedImpo],
            legalDescription: [data.legalDescription, Validators.required],
            commercialDescription: [data.commercialDescription, Validators.required],
            sedDescription: [data.sedDescription, Validators.required],
            tariffSchedule: [data.tariffSchedule, Validators.required],
            sedTariffSchedule: [data.sedTariffSchedule, Validators.required],
            observations: [data.observations]
          });
        },
        error: errData => {
          console.error(errData);
          this.notifyService.showError("Error Técnico", "Error técnico al cargar datos, intente de nuevo");
          this.router.navigateByUrl('/dashboard/catalogs/materials');
        }
      });

    this.filteredSellers = this.materialForm.controls['seller'].valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        return this._filterSeller(value?.alias || value || '');
      }),
    );

    this.filteredBuyers = this.materialForm.controls['buyer'].valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        return this._filterBuyer(value?.alias || value || '');
      }),
    );

    this.filteredTariffs = this.materialForm.controls['tariffSchedule'].valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        return this._filterTariffSchedule(value?.code || value || '');
      }),
    );

    this.filteredSedTariffs = this.materialForm.controls['sedTariffSchedule'].valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        return this._filterTariffSchedule(value?.code || value || '');
      }),
    );
  }

  saveMaterial(): void {
    throw new Error('Method not implemented.');
  }

  displayCompany(company: any): string {
    return company && company.alias ? company.alias : '';
  }

  displayTariff(tariff: any): string {
    return tariff && tariff.code ? tariff.code : '' + '|' + tariff && tariff.baseDescription ? tariff.baseDescription : '';
  }

  private _filterSeller(val: string): Observable<any> {
    return this.companyApi.getSeller().pipe(
      map(data => data.filter((company: Company) => {
        return company.alias.toLowerCase().includes(val?.toLowerCase());
      }))
    );
  }

  private _filterBuyer(val: string): Observable<any> {
    return this.companyApi.getBuyer().pipe(
      map(data => data.filter((company: Company) => {
        return company.alias.toLowerCase().includes(val?.toLowerCase());
      }))
    );
  }

  private _filterTariffSchedule(val: string): Observable<any> {
    return this.tariffApi.getTariff().pipe(
      map(data => data.filter((tariff: TariffSchedule) => {
        return tariff.code.toLowerCase().includes(val?.toLowerCase())
          || tariff.baseDescription.toLowerCase().includes(val?.toLowerCase());
      }))
    );
  }

}
