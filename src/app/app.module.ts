import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './pages/main/main.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { GeneralPageComponent } from './pages/general-page/general-page.component';
import { ItemComponent } from './pages/items/table/table.component';
import { TableComponent } from './pages/general-table/general-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent,
    GeneralPageComponent,
    TableComponent,
    ItemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
