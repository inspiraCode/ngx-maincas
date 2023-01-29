import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/public/public.module").then(m => m.PublicModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  // Other routes
  { path: '404', component: PagenotfoundComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: false })], // DEBUG the router
  exports: [RouterModule]
})
export class AppRoutingModule { }
