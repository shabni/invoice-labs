import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  selectedView = 'Items'

  dataList = [{title:'Invoice', rout:'invoices'}, {title:'Estimate', rout:'extimates'},{title:'Clients', rout:'clients'},{title:'Items', rout:'items'},{title:'Reports', rout:'reports'},
  {title:'business Details', rout:'business-details'},{title:'Region', rout:'regions'},{title:'Choose Template', rout:'templates'},{title:'Upgrade Subscription', rout:'subscription'},
  {title:'Settings', rout:'settings'},{title:'Contact Us', rout:'contact'},
  ]

}
