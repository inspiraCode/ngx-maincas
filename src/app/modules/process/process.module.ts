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
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { HomeComponent } from './home/home.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { SvgComponent } from './svg/svg.component';
import { TransitDocsComponent } from './transit-docs/transit-docs.component';
import { TransitComponent } from './transit/transit.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';

import { AttachmentsComponent } from './attachments/attachments.component';
import { CrossTransportComponent } from './cross-transport/cross-transport.component';
import { CustomsClearenceComponent } from './customs-clearence/customs-clearence.component';
import { DepositsComponent } from './deposits/deposits.component';
import { FinalTransportComponent } from './final-transport/final-transport.component';
import { InboundsComponent } from './inbounds/inbounds.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LegalApiComponent } from './legal-api/legal-api.component';
import { LegalComponent } from './legal/legal.component';
import { OtherComponent } from './legal/other/other.component';
import { PetitionsComponent } from './legal/petitions/petitions.component';
import { PrefileComponent } from './legal/prefile/prefile.component';
import { SedComponent } from './legal/sed/sed.component';
import { LogisticExitComponent } from './logistic-exit/logistic-exit.component';
import { DocumentsComponent } from './monetary-charges/documents/documents.component';
import { MonetaryChargesComponent } from './monetary-charges/monetary-charges.component';
import { OperationsComponent } from './monetary-charges/operations/operations.component';
import { QuotesComponent } from './monetary-charges/quotes/quotes.component';
import { PreDepartureComponent } from './pre-departure/pre-departure.component';
import { ShippingComponent } from './shipping/shipping.component';
import { InvoicesComponent } from './transit-docs/invoices/invoices.component';
import { PackingListsComponent } from './transit-docs/packing-lists/packing-lists.component';
import { PurchaseOrdersComponent } from './transit-docs/purchase-orders/purchase-orders.component';
import { SupplyOrdersComponent } from './transit-docs/supply-orders/supply-orders.component';
import { NewWorkOrderComponent } from './work-orders/new-work-order/new-work-order.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "work-orders",
        children: [
          {
            path: "",
            component: WorkOrdersComponent
          },
          {
            path: "new",
            component: NewWorkOrderComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    SvgComponent,
    WorkOrdersComponent,
    TransitComponent,
    ArrivalsComponent,
    ReceiptComponent,
    TransitDocsComponent,
    InboundsComponent,
    AttachmentsComponent,
    InventoryComponent,
    PreDepartureComponent,
    CrossTransportComponent,
    LogisticExitComponent,
    FinalTransportComponent,
    LegalComponent,
    PurchaseOrdersComponent,
    SupplyOrdersComponent,
    InvoicesComponent,
    PackingListsComponent,
    CustomsClearenceComponent,
    LegalApiComponent,
    ShippingComponent,
    MonetaryChargesComponent,
    DocumentsComponent,
    OperationsComponent,
    QuotesComponent,
    PetitionsComponent,
    PrefileComponent,
    SedComponent,
    OtherComponent,
    DepositsComponent,
    NewWorkOrderComponent
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
export class ProcessModule { }
