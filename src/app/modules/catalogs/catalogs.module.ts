import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { EditCompanyComponent } from './companies/edit-company/edit-company.component';
import { NewCompanyComponent } from './companies/new-company/new-company.component';
import { HomeComponent } from './home/home.component';

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
      }
    ]
  }
]


@NgModule({
  declarations: [
    HomeComponent,
    CompaniesComponent,
    NewCompanyComponent,
    EditCompanyComponent
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
    MatCheckboxModule
  ]
})
export class CatalogsModule { }
