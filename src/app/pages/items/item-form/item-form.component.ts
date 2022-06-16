import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],

})
export class ItemFormComponent {

  constructor(private dialogRef: MatDialogRef<ItemFormComponent>) {

  }

  onCancl() {
    this.dialogRef.close();
  }



}
