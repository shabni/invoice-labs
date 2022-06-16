import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  dataList = [ {title:'Estimate', rout:'extimates'},{title:'Clients', rout:'clients'},{title:'Items', rout:'items'},{title:'Reports', rout:'reports'},
  {title:'business Details', rout:'business-details'},{title:'Region', rout:'regions'},{title:'Choose Template', rout:'templates'},{title:'Upgrade Subscription', rout:'subscription'},
  {title:'Settings', rout:'settings'},{title:'Contact Us', rout:'contact'},
  ]

}
