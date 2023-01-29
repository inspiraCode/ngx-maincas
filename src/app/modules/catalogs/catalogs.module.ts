import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { DeleteCompanyDialogComponent } from './companies/delete-company-dialog/delete-company-dialog.component';
import { EditCompanyComponent } from './companies/edit-company/edit-company.component';
import { NewCompanyComponent } from './companies/new-company/new-company.component';
import { HomeComponent } from './home/home.component';
import { BlockCompanyDialogComponent } from './companies/block-company-dialog/block-company-dialog.component';
import { TariffSchedulesComponent } from './tariff-schedules/tariff-schedules.component';
import { DeleteTariffDialogComponent } from './tariff-schedules/delete-tariff-dialog/delete-tariff-dialog.component';
import { EditTariffComponent } from './tariff-schedules/edit-tariff/edit-tariff.component';
import { NewTariffComponent } from './tariff-schedules/new-tariff/new-tariff.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "companies",
        children: [
          {
            path: "",
            component: CompaniesComponent
          },
          {
            path: "new",
            component: NewCompanyComponent
          },
          {
            path: "edit/:id",
            component: EditCompanyComponent
          }
        ]
      },
      {
        path: "tariffs",
        children: [
          {
            path: "",
            component: TariffSchedulesComponent
          },
          {
            path: "new",
            component: NewTariffComponent
          },
          {
            path: "edit/:id",
            component: EditTariffComponent
          }
        ]
      }
    ]
  }
]


@NgModule({
  declarations: [
    HomeComponent,
    CompaniesComponent,
    NewCompanyComponent,
    EditCompanyComponent,
    DeleteCompanyDialogComponent,
    BlockCompanyDialogComponent,
    TariffSchedulesComponent,
    DeleteTariffDialogComponent,
    EditTariffComponent,
    NewTariffComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule
  ]
})
export class CatalogsModule { }
