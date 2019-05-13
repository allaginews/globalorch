import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './layout/secure/secure.component';
import { PublicComponent } from './layout/public/public.component';
import { SECURE_ROUTES } from './layout/secure/secure.routes';
import { PUBLIC_ROUTES } from './layout/public/public.routes';

const routes: Routes = [
  { path: '', redirectTo: 'region', pathMatch: 'full' },
  { path: '', component: PublicComponent,  data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent,  data: { title: 'Secure Views' }, children: SECURE_ROUTES },
  { path: '**', redirectTo: 'region' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
