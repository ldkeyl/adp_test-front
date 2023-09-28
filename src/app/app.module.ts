import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { PagesComponent } from './core/pages/pages.component';
import { AuthComponent } from './core/auth/auth.component';
import { RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './core/layouts/layout-admin/layout-admin.component';
import { BienvenidaComponent } from './core/pages/bienvenida/bienvenida.component';
import { EmpresaSinContratosComponent } from './core/pages/empresa-sin-contratos/empresa-sin-contratos.component';
import { SolicitarCredencialesComponent } from './core/pages/solicitar-credenciales/solicitar-credenciales.component';
import { EmpresaNoPuedeSolicitarPasesComponent } from './core/pages/empresa-no-puede-solicitar-pases/empresa-no-puede-solicitar-pases.component';
import { ValidarTokenComponent } from './core/pages/validar-token/validar-token.component';
import { IngresoRequisitosComponent } from './core/pages/ingreso-requisitos/ingreso-requisitos.component';
import { BuscarEmpresaComponent } from './core/components/buscar-empresa/buscar-empresa.component';
import { LoginComponent } from './core/auth/login/login.component';
import { CambiarContrasenaPrimeraVezComponent } from './core/auth/cambiar-contrasena-primera-vez/cambiar-contrasena-primera-vez.component';
import { CambioContrasenaComponent } from './core/auth/cambio-contrasena/cambio-contrasena.component';
import { BienvenidaTopComponent } from './core/components/bienvenida-top/bienvenida-top.component';
import { DatosRepresentanteLegalComponent } from './core/components/datos-representante-legal/datos-representante-legal.component';
import { ValidacionRequisitosComponent } from './core/pages/validacion-requisitos/validacion-requisitos.component';
import { ConsultaSolicitudComponent } from './core/pages/consulta-solicitud/consulta-solicitud.component';
import { RecuperarContrasenaComponent } from './core/auth/recuperar-contrasena/recuperar-contrasena.component';
import { BandejaValidacionComponent } from './core/pages/bandeja-validacion/bandeja-validacion.component';
import { GestionUsuarioComponent } from './core/pages/gestion-usuario/gestion-usuario.component';
import { VerRolesComponent } from './core/pages/ver-roles/ver-roles.component';
import { GestionUsuariosComponent } from './core/pages/gestion-usuarios/gestion-usuarios.component';
import { IngresoSolicitudPasesComponent } from './core/pages/ingreso-solicitud-pases/ingreso-solicitud-pases.component';
import { PaseProvisionalComponent } from './core/pages/pase-provisional/pase-provisional.component';
import { RenovarVigenciaProvisionalComponent } from './core/pages/renovar-vigencia-provisional/renovar-vigencia-provisional.component';
import { ModalRequestComponent } from './core/components/modal-request/modal-request.component';
import { HerramientasArticulosComponent } from './core/components/herramientas-articulos/herramientas-articulos.component';
import { ZonaAccesosComponent } from './core/components/zona-accesos/zona-accesos.component';
import { ConsultaSolicitudPasesComponent } from './core/pages/consulta-solicitud-pases/consulta-solicitud-pases.component';
import { ValidacionSolicitudPasesComponent } from './core/pages/validacion-solicitud-pases/validacion-solicitud-pases.component';
import { AdjunteRequisitosVehicularComponent } from './core/components/adjunte-requisitos-vehicular/adjunte-requisitos-vehicular.component';
import { RangoFechaComponent } from './core/components/rango-fecha/rango-fecha.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthComponent,
    LayoutAdminComponent,
    NotFoundComponent,
    FooterComponent,
    BienvenidaComponent,
    EmpresaSinContratosComponent,
    SolicitarCredencialesComponent,
    EmpresaNoPuedeSolicitarPasesComponent,
    ValidarTokenComponent,
    IngresoRequisitosComponent,
    BuscarEmpresaComponent,
    LoginComponent,
    CambiarContrasenaPrimeraVezComponent,
    CambioContrasenaComponent,
    BienvenidaTopComponent,
    DatosRepresentanteLegalComponent,
    ValidacionRequisitosComponent,
    ConsultaSolicitudComponent,
    RecuperarContrasenaComponent,
    BandejaValidacionComponent,
    GestionUsuarioComponent,
    VerRolesComponent,
    GestionUsuariosComponent,
    IngresoSolicitudPasesComponent,
    PaseProvisionalComponent,
    ModalRequestComponent,
    RenovarVigenciaProvisionalComponent,
    HerramientasArticulosComponent,
    ZonaAccesosComponent,
    ConsultaSolicitudPasesComponent,
    ValidacionSolicitudPasesComponent,
    AdjunteRequisitosVehicularComponent,
    RangoFechaComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
