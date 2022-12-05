import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  selectedView = 'Dashboard'

  dataList = [
    {title:'Dashboard', rout:'dashboard'},
    {title:'Clients', rout:'clients'},
  ]

}
