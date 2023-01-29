import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SvgComponent } from './svg/svg.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    SvgComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProcessModule { }
