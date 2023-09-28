import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { PagesRoutingModule } from './core/pages/pages.routing';
import { PagesComponent } from './core/pages/pages.component';
import { BienvenidaComponent } from './core/pages/bienvenida/bienvenida.component';
import { AuthRoutingModule } from './core/auth/auth-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'Bienvenida', pathMatch: 'full' },
  { path: 'Bienvenida', component: BienvenidaComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}