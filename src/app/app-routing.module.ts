import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './pages/app-template/app-template.component';
import { ClientComponent } from './pages/clients/client-table/client-table.component';
import { ItemComponent } from './pages/items/item-table/item-table.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'overview', component: ItemComponent },
  { path: 'customers', component: ClientComponent },
  { path: 'devices', component: SettingsComponent },
  { path: 'alerts', component: SettingsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
