import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/clients/client-table/client-table.component';
import { ItemComponent } from './pages/items/item-table/item-table.component';

const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'items', component: ItemComponent },
  { path: 'clients', component: ClientComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
