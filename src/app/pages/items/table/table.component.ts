import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ItemFormComponent } from '../item-form/item-form.component';


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

constructor(public dialog: MatDialog) {

}

ngOnInit() {

  this.config['tableList']=this.datbleData
  
}

onTableSignal(action) {

  console.log(action,"++++++++++++++++++")

  if (action.action == 'addNew') {
    this.addForm()
  }
}

addForm() {

  const dialogPosition = {
    top: 25 + 'px',
  };

  const config =  {
    height: '80vh',
    width: '55%',
    panelClass: ['animate__animated','animate__slideInLeft'],
    disableClose: false,
    position: dialogPosition,
    data: {}
}
const dialogRef = this.dialog.open(ItemFormComponent , config);
dialogRef.afterClosed().subscribe(result => {
    
});
}


}
