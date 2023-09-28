import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { CambiarContrasenaPrimeraVezComponent } from './cambiar-contrasena-primera-vez/cambiar-contrasena-primera-vez.component';
import { CambioContrasenaComponent } from './cambio-contrasena/cambio-contrasena.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';


const routes: Routes = [
//rutas dashboard e hijas
    {
        path: 'auth',
        component: AuthComponent,
        // canActivate: [  ],
        children: [
             { path: '', component: AuthComponent },
             { path: 'login', component: LoginComponent },
             { path: 'cambiar-contraseña-primera-vez', component: CambiarContrasenaPrimeraVezComponent },
             { path: 'cambio-contraseña', component: CambioContrasenaComponent },
             { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
