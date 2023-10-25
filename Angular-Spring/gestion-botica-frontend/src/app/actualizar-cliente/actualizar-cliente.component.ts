import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent  implements OnInit {

  dni:string;
  cliente:Cliente = new Cliente();
  constructor(private clienteService:ClienteService,private router:Router,private route:ActivatedRoute){}

    ngOnInit(): void {
      this.dni = this.route.snapshot.params['dni'];
      this.clienteService.obtenerClientePorId(this.dni).subscribe(dato =>{
        this.cliente = dato;
      },error => console.log(error)); 
    }

    irAlaListaDeClientes(){
      this.router.navigate(['/clientes']);
      Swal.fire('Cliente actualizado', `El cliente ${this.cliente.nombre} ha sido actualizado con
      exito`, `success`);
    }

    onSubmit(){
      this.clienteService.actualizarCliente(this.dni,this.cliente).subscribe(dato =>{
        this.irAlaListaDeClientes();
    },error => console.log(error));
}
}
