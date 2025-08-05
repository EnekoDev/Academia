package com.academia.spring.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EjemploRestController {

    @GetMapping("/")
    public String ejemplo() {
        return "Ejemplo rest controller en Spring";
    }

}
