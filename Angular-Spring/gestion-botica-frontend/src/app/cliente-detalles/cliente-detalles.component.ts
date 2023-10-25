import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-detalles',
  templateUrl: './cliente-detalles.component.html',
  styleUrls: ['./cliente-detalles.component.css']
})
export class ClienteDetallesComponent implements OnInit {

  dni: string;
  cliente:Cliente;
  constructor(private route: ActivatedRoute,private clienteServicio:ClienteService){}

  ngOnInit(): void {
    this.dni = this.route.snapshot.params['dni'];
    this.cliente = new Cliente();
    this.clienteServicio.obtenerClientePorId(this.dni).subscribe(dato => {
      this.cliente = dato;
      Swal.fire(`Detalles del cliente ${this.cliente.nombre}`);
    });
  }

}
