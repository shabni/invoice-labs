import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientFormComponent } from '../client-form/client-form.component';


@Component({
  selector: 'client',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],

})
export class ClientComponent {

  config:any ={}

  datbleData=[
    {Name:'AlKalsoom',Email:'alkalsoom@gmail.com',Contact: 120901923, Invoice:1,Amount:'CHFO564', Actions:['delete','edit']},
    {Name:'Ali',Email:'alim@gmail.com',Contact: 234354523, Invoice:2,Amount:'CHFO64', Actions:['delete','edit']},
    {Name:'Usman',Email:'usman@gmail.com',Contact: 45521121, Invoice:3,Amount:'CHFO13', Actions:['delete','edit']},
    {Name:'Farhat',Email:'farhat@gmail.com',Contact: 41343546, Invoice:4,Amount:'CHF352', Actions:['delete','edit']},
    {Name:'Abbas Ahmad',Email:'abbas@gmail.com',Contact: 562315323, Invoice:5,Amount:'CH453', Actions:['delete','edit']},
    {Name:'Ahmad',Email:'ahmad@gmail.com',Contact: 234345624, Invoice:20,Amount:'CHF675', Actions:['delete','edit']},
]

columsList = ['Name', 'Email', 'Contact', 'Invoice','Amount','Actions']

constructor(public dialog: MatDialog) {

}

ngOnInit() {

  this.config['tableList']=this.datbleData
  this.config['columns']=this.columsList
  this.config['titel'] = 'Clients'
  
}

onTableSignal(action) {

  if (action.action == 'addNew') {this.addForm()}
  else if(action.action == 'delete') {console.log(action.action)}
  else if(action.action == 'edit') {console.log(action.action)}
}

addForm() {
    const dialogPosition = {
      top: 30 + 'px',
    };

    const config =  {
      height: '55vh',
      width: '36%',
      panelClass: 'custom-modalbox',
      disableClose: false,
      position: dialogPosition,
      data: {}
    }
    const dialogRef = this.dialog.open(ClientFormComponent , config);
    dialogRef.afterClosed().subscribe(result => {});
  }

}
