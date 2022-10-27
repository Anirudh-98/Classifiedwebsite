package com.ecommerce.Ecommercewebsite.dao;

import com.ecommerce.Ecommercewebsite.entity.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends CrudRepository<User, String> {
    List<Object> findByUserName(String currentUser);

}
