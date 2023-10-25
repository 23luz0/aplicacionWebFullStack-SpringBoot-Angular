package com.proyecto.crud.crudangular.controller;

import com.proyecto.crud.crudangular.entity.Cliente;
import com.proyecto.crud.crudangular.exceptions.ResourceNotFoundExceptions;
import com.proyecto.crud.crudangular.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/clientes")
    public List<Cliente> listarTodosLosClientes(){
        return  clienteRepository.findAll();
    }

    @PostMapping("/clientes")
    public  Cliente guardarCliente(@RequestBody Cliente cliente){
        return  clienteRepository.save(cliente);
    }
   /*dni=id*/
    @GetMapping("/clientes/{dni}")
    public ResponseEntity<Cliente> obtenerClientePorId(@PathVariable String dni){
        Cliente cliente = clienteRepository.findById(dni)
                .orElseThrow(() -> new ResourceNotFoundExceptions("No existe el cliente con el ID : " + dni));
        return  ResponseEntity.ok(cliente);
    }

    @PutMapping("/clientes/{dni}")
    public ResponseEntity<Cliente> actualizarCliente(@PathVariable String dni,@RequestBody Cliente detallesCliente){
        Cliente cliente = clienteRepository.findById(dni)
                .orElseThrow(() -> new ResourceNotFoundExceptions("No existe el cliente con el ID : " + dni));
        cliente.setDni(detallesCliente.getDni());
        cliente.setNombre(detallesCliente.getNombre());
        cliente.setTelefono(detallesCliente.getTelefono());
        cliente.setDireccion(detallesCliente.getDireccion());
        cliente.setEmail(detallesCliente.getEmail());

        Cliente clienteActualizado = clienteRepository.save(cliente);
        return  ResponseEntity.ok(clienteActualizado);
    }

    @DeleteMapping("/clientes/{dni}")
    public ResponseEntity<Map<String,Boolean>> eliminarCliente(@PathVariable String dni) {
        Cliente cliente = clienteRepository.findById(dni)
                .orElseThrow(() -> new ResourceNotFoundExceptions("No existe el cliente con el ID : " + dni));

        clienteRepository.delete(cliente);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

}
