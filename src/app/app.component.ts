import { Component } from '@angular/core';
import { CustomerFeature } from './interfaces/customer-feature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lookup-interface';

  correctSalesFeature: CustomerFeature = {
    type: 'sales',
    data: { product: 'prod1', option: null, mobileNumber: null },
    status: 'Sold',
    provider: 'test1',
    notes: ['notes here', 'more notes'],
  };

  illegalSalesFeature: CustomerFeature = {
    type: 'purchase-ledger',
    data: { product: 'prod1', option: 'b', mobileNumber: '0800000000' },
    status: 'Sold',
    provider: 'test1',
    notes: ['notes here', 'more notes'],
  };

  correctPurchaseFeature: CustomerFeature = {
    type: 'purchase-ledger',
    data: { mobileNumber: '078000000', emailAddress: 'test@test.com' },
    status: 'Purchased',
    provider: 'test1',
    notes: ['notes here', 'more notes'],
  };

  illegalPurchaseFeature: CustomerFeature = {
    type: 'purchase-ledger',
    data: { mobileNumber: '078000000', emailAddress: 'test@test.com' },
    status: 'Built',
    provider: 'test1',
    notes: ['notes here', 'more notes'],
  };
}
