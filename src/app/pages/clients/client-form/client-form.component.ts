import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],

})
export class ClientFormComponent {

  constructor(private dialogRef: MatDialogRef<ClientFormComponent>) {

  }

  onCancl() {
    this.dialogRef.close();
  }



}
