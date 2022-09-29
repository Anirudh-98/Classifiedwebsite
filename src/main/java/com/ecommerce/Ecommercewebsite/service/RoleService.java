package com.ecommerce.Ecommercewebsite.service;

import com.ecommerce.Ecommercewebsite.dao.RoleDao;
import com.ecommerce.Ecommercewebsite.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    @Autowired
    private RoleDao roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }
}
