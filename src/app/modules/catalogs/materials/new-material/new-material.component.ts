import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { NotificationService } from 'src/app/notification.service';
import { ApiService as CompanyApiService } from '../../companies/services/api.service';
import { ApiService as TariffApiService } from '../../tariff-schedules/services/api.service';
import { ApiService } from '../services/api.service';

export interface Company {
  id: number,
  alias: string,
  name: string
}

export interface TariffSchedule {
  id: number,
  code: string,
  baseDescription: string
}

@Component({
  selector: 'app-new-material',
  templateUrl: './new-material.component.html',
  styleUrls: ['./new-material.component.sass']
})
export class NewMaterialComponent implements OnInit {
  materialForm !: FormGroup;
  filteredSellers: Observable<any> | undefined;
  filteredBuyers: Observable<any> | undefined;
  filteredTariffs: Observable<any> | undefined;
  filteredSedTariffs: Observable<any> | undefined;

  constructor(
    private formBuilder: FormBuilder,
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
      approvedImport: [true],
      legalDescription: ['', Validators.required],
      commercialDescription: ['', Validators.required],
      sedDescription: ['', Validators.required],
      tariffSchedule: ['', Validators.required],
      sedTariffSchedule: ['', Validators.required],
      observations: ['']
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

  addMaterial() {
    throw new Error("Add Material method not implemented yet");
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
