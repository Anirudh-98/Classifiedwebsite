package com.ecommerce.Ecommercewebsite.dao;

import com.ecommerce.Ecommercewebsite.entity.WishList;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WishListRepository extends CrudRepository<WishList, Integer> {

}
