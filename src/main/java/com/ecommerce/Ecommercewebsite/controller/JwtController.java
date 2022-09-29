package com.ecommerce.Ecommercewebsite.controller;

import com.ecommerce.Ecommercewebsite.entity.JwtRequest;
import com.ecommerce.Ecommercewebsite.entity.JwtResponse;
import com.ecommerce.Ecommercewebsite.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class JwtController {

    @Autowired
    private JwtService jwtService;
     @GetMapping({"/hello"})
    public String authencticated(){
        return "Token Verified!!";
    }
    @PostMapping({"/authenticate"})
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        return jwtService.createJwtToken(jwtRequest);
    }
}
