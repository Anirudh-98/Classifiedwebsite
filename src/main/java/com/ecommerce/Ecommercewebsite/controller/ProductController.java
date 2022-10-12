package com.ecommerce.Ecommercewebsite.controller;

import com.ecommerce.Ecommercewebsite.dao.ProductRepository;
import com.ecommerce.Ecommercewebsite.dao.UserDao;
import com.ecommerce.Ecommercewebsite.entity.ImageModel;
import com.ecommerce.Ecommercewebsite.entity.Product;
import com.ecommerce.Ecommercewebsite.entity.User;
import com.ecommerce.Ecommercewebsite.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserDao userDao;
    @PostMapping(value = {"/addNewProduct"},consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Product addNewProduct(@RequestPart("product") Product product,
                                 @RequestPart("imageFile")MultipartFile[]file
                                 ){
//       return productService.addNewProduct(product);
        try{
           Set<ImageModel> images = uploadImage(file);
           product.setProductImages(images);
           return productService.addNewProduct(product);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
        Set<ImageModel> imageModels = new HashSet<>();

        for (MultipartFile file: multipartFiles){
            ImageModel imageModel = new ImageModel(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            imageModels.add(imageModel);
        }
        return imageModels;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAllProducts () {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @DeleteMapping("/deleteProduct/{productId}")
    public void deleteProductDetails(@PathVariable("productId") Integer productId){
       productService.deleteProductDetails(productId);
    }
    @GetMapping("/getProductDetailsById/{productId}")
    public Product getProductDetailsById(@PathVariable("productId") Integer productId) {
      return productService.getProductDetailsById(productId);
    }


}

