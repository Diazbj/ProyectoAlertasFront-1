import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/usuarios/registro/registro.component';
import { ActivarUsuarioComponent } from './paginas/usuarios/activar-usuario/activar-usuario.component';
import { RecuperarPassword } from './paginas/recuperar-password/nuevo-password.component';
import { PerfilComponent } from './paginas/usuarios/perfil/perfil.component';
import { CrearReporteComponent } from './paginas/reportes/crear-reporte/crear-reporte.component';
import { EditarReporteComponent } from './paginas/reportes/editar-reporte/editar-reporte.component';
import { VerReporteComponent } from './paginas/reportes/ver-reporte/ver-reporte.component';
import { ListarReportesComponent } from './paginas/reportes/listar-reportes/listar-reportes.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { HistorialEstadosComponent } from './paginas/reportes/historial-estados/historial-estados.component';
import { HomeUsuarioComponent} from './paginas/home-usuario/home-usuario.component'

export const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'activar-usuario', component: ActivarUsuarioComponent },
   { path: 'recuperar-password', component: RecuperarPassword },
   { path: 'perfil', component: PerfilComponent },
   { path: 'crear-reporte', component: CrearReporteComponent },
   { path: 'editar-reporte/:id', component: EditarReporteComponent },
   { path: 'reporte/:id', component: VerReporteComponent },
   { path: 'reportes', component: ListarReportesComponent },
   { path: 'categorias', component: CategoriasComponent },
   { path: 'historial-estados/:idReporte', component: HistorialEstadosComponent },
   { path: 'home-usuario', component: HomeUsuarioComponent },
   { path: "**", pathMatch: "full", redirectTo: "" }
];
