import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes:Cliente[];

  constructor(private clienteServicio:ClienteService,private router:Router) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  //dni=id
  actualizarCliente(dni:string){
    this.router.navigate(['actualizar-cliente',dni]);
  }

  private obtenerClientes(){
    this.clienteServicio.obtenerListaDeClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }

  eliminarCliente(dni:string){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al Cliente",
      //type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimínalo',
      cancelButtonText: 'No, cancelar',
      //confirmButtonClass: 'btn btn-success',
      //cancelButtonClass: 'btn btn-danger', 
      buttonsStyling: true,
    }).then((result) =>{
      if(result.value){
        this.clienteServicio.eliminarCliente(dni).subscribe(dato =>{
          console.log(dato);
          this.obtenerClientes();
          Swal.fire(
            'Cliente Eliminado',
            'El cliente ha sido elimnado con éxito',
            'success'
          )
        })
      }
    })
        
  }
  
  verDetallesDelCliente(dni: string){
    this.router.navigate(['cliente-detalles',dni]);
  }
}
