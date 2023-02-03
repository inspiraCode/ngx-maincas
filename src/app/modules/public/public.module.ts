import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  }
]

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatSidenavModule,
        MatButtonModule
    ]
})
export class PublicModule { }
