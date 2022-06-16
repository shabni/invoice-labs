import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'items',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

})
export class ItemComponent {

  config:any ={}

  datbleData=[
    {name:'Case',invoice:'2200',amount: 1, year:20},
    {name:'CPU',invoice:'5000',amount: 2, year:20},
    {name:'GPU',invoice:'3000',amount: 2,year:20},
    {name:'Motherboard',invoice:'800',amount: 1,year:20},
    {name:'RAM',invoice:'600',amount: 6, year:20},
    {name:'Storage Device',invoice:'800',amount: 4, year:20},
    {name:'Cooling',invoice:'900',amount: 2, year:20}
]

ngOnInit() {

  this.config['tableList']=this.datbleData
  
}

onTableSignal(event) {

  console.log(event,"++++++++++++++++++")
}


}
