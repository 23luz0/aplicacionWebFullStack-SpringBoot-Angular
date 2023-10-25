import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //esta URL obtiene el listado de todos los clientes en el backend
  private baseURL="http://localhost:8080/api/v1/clientes";
  
  constructor(private httpClient  : HttpClient) { }

  //este metodo nos sirve para obtener los clientes
  obtenerListaDeClientes():Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
 }

 //este metodo nos sirve para registar un cliente
 registrarCliente(cliente:Cliente) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,cliente)
 }
//se cambió id por dni
 //este metodo nos sirve para actualizar el cliente
 actualizarCliente(dni:String,cliente:Cliente) : Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${dni}`,cliente);
}

//este metodo nos sirve para obtener o buscar un cliente
obtenerClientePorId(dni:String) : Observable<Cliente>{
  return this.httpClient.get<Cliente>(`${this.baseURL}/${dni}`);
}

//este metodo nos sirve para eliminar cliente
eliminarCliente(dni:String) : Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${dni}`);
}

}
