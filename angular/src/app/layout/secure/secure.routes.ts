import { Routes } from '@angular/router';
import { RegionsComponent } from '../secure/regions/regions.component';
import { ClientsComponent } from '../secure/clients/clients.component';
import { ProductsComponent } from '../secure/products/products.component';
import { AddmodulesComponent } from '../secure/addmodules/addmodules.component';

export const SECURE_ROUTES: Routes = [
  // { path: '', redirectTo: 'region', pathMatch: 'full' },
    { path: 'region', component: RegionsComponent },
    { path: 'client', component: ClientsComponent },
    { path: 'product', component: ProductsComponent },
    { path: 'addmodule', component: AddmodulesComponent }
    
];