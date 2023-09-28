import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { EmpresaSinContratosComponent } from './empresa-sin-contratos/empresa-sin-contratos.component';
import { SolicitarCredencialesComponent } from './solicitar-credenciales/solicitar-credenciales.component';
import { EmpresaNoPuedeSolicitarPasesComponent} from './empresa-no-puede-solicitar-pases/empresa-no-puede-solicitar-pases.component'
import { ValidarTokenComponent } from './validar-token/validar-token.component';
import { IngresoRequisitosComponent } from './ingreso-requisitos/ingreso-requisitos.component';
import { ValidacionRequisitosComponent } from './validacion-requisitos/validacion-requisitos.component';
import { ConsultaSolicitudComponent } from './consulta-solicitud/consulta-solicitud.component';
import { BandejaValidacionComponent } from './bandeja-validacion/bandeja-validacion.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { VerRolesComponent } from './ver-roles/ver-roles.component';
import { IngresoSolicitudPasesComponent } from './ingreso-solicitud-pases/ingreso-solicitud-pases.component';
import { PaseProvisionalComponent } from './pase-provisional/pase-provisional.component';
import { RenovarVigenciaProvisionalComponent } from './renovar-vigencia-provisional/renovar-vigencia-provisional.component';
import { ConsultaSolicitudPasesComponent } from './consulta-solicitud-pases/consulta-solicitud-pases.component';
import { ValidacionSolicitudPasesComponent } from './validacion-solicitud-pases/validacion-solicitud-pases.component';



const routes: Routes = [
//rutas dashboard e hijas
    {
        path: 'dashboard',
        component: PagesComponent,
        // canActivate: [  ],
        children: [
             { path: '', component: PagesComponent },
             { path: 'empresa-sin-contratos', component: EmpresaSinContratosComponent },
             { path: 'solicitar-credenciales', component: SolicitarCredencialesComponent },
             { path: 'empresa-no-puede-solicitar-pases', component: EmpresaNoPuedeSolicitarPasesComponent },
             { path: 'validar-token', component: ValidarTokenComponent },
             { path: 'ingreso-requisitos', component: IngresoRequisitosComponent },
             { path: 'validacion-requisitos', component: ValidacionRequisitosComponent },
             { path: 'consulta-solicitud', component: ConsultaSolicitudComponent },
             { path: 'bandeja-validacion', component: BandejaValidacionComponent },
             { path: 'gestion-usuario', component: GestionUsuarioComponent },
             { path: 'gestion-usuarios', component: GestionUsuariosComponent },
             { path: 'ver-roles', component: VerRolesComponent },
             { path: 'ingreso-solicitud-pases', component: IngresoSolicitudPasesComponent },
             { path: 'pase-provisional', component: PaseProvisionalComponent },
             { path: 'renovar-vigencia-provisional', component: RenovarVigenciaProvisionalComponent },
             { path: 'consulta-solicitud-pases', component: ConsultaSolicitudPasesComponent},
             { path: 'validacion-solicitud-pases', component: ValidacionSolicitudPasesComponent},
            //  { path: 'tables', component: ClientsComponent },
            // { path: 'userU', component: UpdateUsuarioComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }


