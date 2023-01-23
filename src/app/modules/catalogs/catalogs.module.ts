import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { HomeComponent } from './home/home.component';
import { NewCompanyComponent } from './companies/new-company/new-company.component';

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
    NewCompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CatalogsModule { }
