package com.ecommerce.Ecommercewebsite.dao;

import com.ecommerce.Ecommercewebsite.entity.Product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
}
