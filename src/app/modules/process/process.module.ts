import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SvgComponent } from './svg/svg.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';
import { TransitComponent } from './transit/transit.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { TransitDocsComponent } from './transit-docs/transit-docs.component';

import { InboundsComponent } from './inbounds/inbounds.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PreDepartureComponent } from './pre-departure/pre-departure.component';
import { CrossTransportComponent } from './cross-transport/cross-transport.component';
import { LogisticExitComponent } from './logistic-exit/logistic-exit.component';
import { FinalTransportComponent } from './final-transport/final-transport.component';
import { LegalComponent } from './legal/legal.component';
import { PurchaseOrdersComponent } from './transit-docs/purchase-orders/purchase-orders.component';
import { SupplyOrdersComponent } from './transit-docs/supply-orders/supply-orders.component';
import { InvoicesComponent } from './transit-docs/invoices/invoices.component';
import { PackingListsComponent } from './transit-docs/packing-lists/packing-lists.component';
import { CustomsClearenceComponent } from './customs-clearence/customs-clearence.component';
import { LegalApiComponent } from './legal-api/legal-api.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MonetaryChargesComponent } from './monetary-charges/monetary-charges.component';
import { DocumentsComponent } from './monetary-charges/documents/documents.component';
import { OperationsComponent } from './monetary-charges/operations/operations.component';
import { QuotesComponent } from './monetary-charges/quotes/quotes.component';
import { PetitionsComponent } from './legal/petitions/petitions.component';
import { PrefileComponent } from './legal/prefile/prefile.component';
import { SedComponent } from './legal/sed/sed.component';
import { OtherComponent } from './legal/other/other.component';
import { DepositsComponent } from './deposits/deposits.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "work_orders",
        children: [
          {
            path: "",
            component: WorkOrdersComponent
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
    DepositsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProcessModule { }
