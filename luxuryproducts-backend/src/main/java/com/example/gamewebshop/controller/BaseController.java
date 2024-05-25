package com.example.gamewebshop.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.gamewebshop.dao.UserRepository;
import com.example.gamewebshop.models.CustomUser;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://s1148232.student.inf-hsleiden.nl:18232"})
public class BaseController {
    protected final UserRepository userDAO;

    public BaseController(UserRepository userDAO) {
        this.userDAO = userDAO;
    }

    protected CustomUser getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = authentication.getName();
        CustomUser customUser = userDAO.findByEmail(userEmail);

        if (customUser == null) {
            throw new RuntimeException("User not found");
        }

        return customUser;
    }
}
