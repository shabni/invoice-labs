import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  dataList = ['Estimates','Clients','Items','Reports','Business Details','Region','Choose Template','Upgrade Subscription','Settings','Contact Us']

}
