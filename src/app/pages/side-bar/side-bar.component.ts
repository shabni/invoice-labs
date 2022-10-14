import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  selectedView = 'Items'

  dataList = [{title:'Overview', rout:'overview'}, {title:'Customers', rout:'customers'},{title:'Ships', rout:'ships'},{title:'Devices', rout:'devices'},{title:'Alerts', rout:'alerts'},
  ]

}
