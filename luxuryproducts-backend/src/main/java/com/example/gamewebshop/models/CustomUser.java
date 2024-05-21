package com.example.gamewebshop.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Set;

@Entity(name = "Users")
public class CustomUser {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String infix;
    private String lastName;
    private String email;
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<PlacedOrder> placedOrders;

    @OneToMany(mappedBy = "owner")
    @JsonManagedReference
    private Set<Giftcard> giftcards;

    public CustomUser() {
    }

    public CustomUser(String name, String infix, String lastName, String email, String password) {
        this.name = name;
        this.infix = infix;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public Set<PlacedOrder> getOrders() {
        return placedOrders;
    }

    public void setOrders(Set<PlacedOrder> placedOrders) {
        this.placedOrders = placedOrders;
    }

    public String getInfix() {
        return infix;
    }

    public void setInfix(String infix) {
        this.infix = infix;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String username) {
        this.email = username;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
