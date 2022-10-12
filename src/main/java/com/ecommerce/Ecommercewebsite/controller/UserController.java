package com.ecommerce.Ecommercewebsite.controller;

import com.ecommerce.Ecommercewebsite.dao.ProductRepository;
import com.ecommerce.Ecommercewebsite.dao.UserDao;
import com.ecommerce.Ecommercewebsite.entity.Product;
import com.ecommerce.Ecommercewebsite.entity.User;
import com.ecommerce.Ecommercewebsite.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserDao userDao;
    @Autowired
    private ProductRepository productRepository;
    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/registerNewUser"})
    public User registerNewUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
    @GetMapping("/getUserById/{userName}")
    public User getUserById(@PathVariable("userName") String userName){
        return userService.getUserById(userName);
    }
    @GetMapping("/allUsers")
    public List<User> AllProducts(){
        return userService.getAllUsers();
    }

    @PutMapping("/{userName}/products/{productId}")
    User userProducts(
            @PathVariable String userName,
            @PathVariable Integer productId
    ){
        User user =  userDao.findById(userName).get();
        Product product = productRepository.findById(productId).get();
        user.productUser(product);
        return userDao.save(user);
    }
}
