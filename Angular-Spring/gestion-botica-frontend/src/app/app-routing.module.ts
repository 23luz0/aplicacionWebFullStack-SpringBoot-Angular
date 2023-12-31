import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ClienteDetallesComponent } from './cliente-detalles/cliente-detalles.component';

const routes: Routes = [
  {path : 'clientes', component:ListaClientesComponent},
  {path : '',redirectTo:'clientes',pathMatch:'full'},
  {path : 'registrar-cliente',component : RegistrarClienteComponent},
  {path : 'actualizar-cliente/:dni',component : ActualizarClienteComponent},
  {path : 'cliente-detalles/:dni',component : ClienteDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
