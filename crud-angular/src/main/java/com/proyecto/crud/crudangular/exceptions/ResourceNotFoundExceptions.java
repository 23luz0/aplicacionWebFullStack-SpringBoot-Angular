package com.proyecto.crud.crudangular.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExceptions extends RuntimeException {

    private  static  final long serialVersionID = 1L;

    public ResourceNotFoundExceptions(String mensaje){
        super(mensaje);

    }

}
