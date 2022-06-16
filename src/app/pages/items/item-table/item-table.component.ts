import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ItemFormComponent } from '../item-form/item-form.component';


@Component({
  selector: 'items',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss'],

})
export class ItemComponent {

  config:any ={}

  datbleData=[
    {Name:'Case',Invoice:'2200',Amount: 1, Year:20, Actions:['delete']},
    {Name:'CPU',Invoice:'5000',Amount: 2, Year:20, Actions:['delete']},
    {Name:'GPU',Invoice:'3000',Amount: 2,Year:20, Actions:['delete']},
    {Name:'Motherboard',Invoice:'800',Amount: 1,Year:20, Actions:['delete']},
    {Name:'RAM',Invoice:'600',Amount: 6, Year:20, Actions:['delete']},
    {Name:'Storage Device',Invoice:'800',Amount: 4, Year:20, Actions:['delete']},
    {Name:'Cooling',Invoice:'900',Amount: 2, Year:20, Actions:['delete']}
]

columsList = ['Name', 'Invoice', 'Amount', 'Year','Actions']

constructor(public dialog: MatDialog) {

}

ngOnInit() {

  this.config['tableList']=this.datbleData
  this.config['columns']=this.columsList
  
}

onTableSignal(action) {

  if (action.action == 'addNew') {
    this.addForm()
  }
}

addForm() {
    const dialogPosition = {
      top: 30 + 'px',
    };

    const config =  {
      height: '53vh',
      width: '36%',
      panelClass: 'custom-modalbox',
      disableClose: false,
      position: dialogPosition,
      data: {}
    }
    const dialogRef = this.dialog.open(ItemFormComponent , config);
    dialogRef.afterClosed().subscribe(result => {});
  }

}
