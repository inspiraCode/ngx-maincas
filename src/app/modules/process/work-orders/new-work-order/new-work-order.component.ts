import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-work-order',
  templateUrl: './new-work-order.component.html',
  styleUrls: ['./new-work-order.component.sass']
})
export class NewWorkOrderComponent {
  workOrderForm !: FormGroup;

  addWorkOrder() {
    console.error("Not implemented yet");
  }
}
