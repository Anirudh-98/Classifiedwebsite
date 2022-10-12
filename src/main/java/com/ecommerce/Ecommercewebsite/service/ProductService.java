package com.ecommerce.Ecommercewebsite.service;

import com.ecommerce.Ecommercewebsite.dao.ProductRepository;
import com.ecommerce.Ecommercewebsite.dao.UserDao;
import com.ecommerce.Ecommercewebsite.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserDao userDao;
    public Product addNewProduct(Product product){
       return productRepository.save(product);
    }

    public List<Product> getAllProducts(){
      return (List<Product>) productRepository.findAll();
    }

    public Product getProductDetailsById(Integer productId){
       return productRepository.findById(productId).get();

    }
    public void deleteProductDetails(Integer productId){
        productRepository.deleteById(productId);
    }

}
