import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './layout/public/public.component';
import { SecureComponent } from './layout/secure/secure.component';
import { RegionsComponent } from './layout/secure/regions/regions.component';
import { ClientsComponent } from './layout/secure/clients/clients.component';
import { ProductsComponent } from './layout/secure/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    RegionsComponent,
    ClientsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
