import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './app-template.component.html',
  styleUrls: ['./app-template.component.scss']
})
export class TemplateComponent {

  selectedView = 'Items'

  ngOnInit() {
  }
}