package com.ecommerce.Ecommercewebsite.service;

import com.ecommerce.Ecommercewebsite.configuration.JwtRequestFilter;
import com.ecommerce.Ecommercewebsite.dao.WishListRepository;
import com.ecommerce.Ecommercewebsite.entity.WishList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class WishListService {
    @Autowired
    private WishListRepository wishListRepository;
    @Autowired
    private ProductService productService;
    public WishList createWishList(Integer productId, WishList wishList) {

        String currentUser = JwtRequestFilter.CURRENT_USER;
        WishList wishlist = new WishList();
        wishlist.setProduct(productService.getProductDetailsById(productId));
        wishlist.setUser(currentUser);
        wishlist.setCreatedDate(new Date());
        wishListRepository.save(wishList);
        return wishlist;
    }
}
