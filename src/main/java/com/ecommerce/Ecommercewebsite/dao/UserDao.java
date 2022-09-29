package com.ecommerce.Ecommercewebsite.dao;

import com.ecommerce.Ecommercewebsite.entity.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User, String> {
}
