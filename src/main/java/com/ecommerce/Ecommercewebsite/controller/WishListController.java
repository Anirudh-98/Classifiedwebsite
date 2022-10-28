package com.ecommerce.Ecommercewebsite.controller;


import com.ecommerce.Ecommercewebsite.entity.WishList;

import com.ecommerce.Ecommercewebsite.service.WishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/wishlist")
public class WishListController {
    @Autowired
    private WishListService wishListService;
    //save product in wishlist
    @PostMapping("/addToWishlist/{ProductId}")
    public WishList addToWishlist(@PathVariable("{ProductId}") Integer productId,@RequestBody WishList wishList) {

        return wishListService.createWishList(productId,wishList);

    }

    //get all wishlist products
}
