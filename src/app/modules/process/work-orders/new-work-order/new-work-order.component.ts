import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-work-order',
  templateUrl: './new-work-order.component.html',
  styleUrls: ['./new-work-order.component.sass']
})
export class NewWorkOrderComponent implements OnInit {
  workOrderForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.workOrderForm = this.formBuilder.group({
      serviceType: ['', Validators.required],
      waitingOn: [''],
      state: ['CREATED'],
      pickUpAddressLineOne: [''],
      pickUpAddressLineTwo: [''],
      pickUpAddressCountry: [''],
      pickUpAddressCity: [''],
      pickUpAddressState: [''],
      pickUpAddressZip: [''],
      pickUpInstructions: [''],
      pickUpServiceHours: [''],
      pickUpContactName: [''],
      pickUpContactInfo: [''],
      dropOffAddressLineOne: [''],
      dropOffAddressLineTwo: [''],
      dropOffAddressCountry: [''],
      dropOffAddressCity: [''],
      dropOffAddressState: [''],
      dropOffAddressZip: [''],
      dropOffInstructions: [''],
      dropOffServiceHours: [''],
      dropOffContactName: [''],
      dropOffContactInfo: [''],
      carrierName: [''],
      carrierDriverName: [''],
      carrierVehicleDetails: [''],
      trackingUrl: ['']
    });
  }
  

  addWorkOrder() {
    console.error("Not implemented yet");
    throw new Error('Method not implemented.');
  }
}
