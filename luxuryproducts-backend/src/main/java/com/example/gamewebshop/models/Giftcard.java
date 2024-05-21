package com.example.gamewebshop.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Giftcard {

    @Id
    @GeneratedValue
    private long id;
    private double balance;
    private String code;
    private String pin;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonBackReference
    private CustomUser owner;

    public Giftcard() {
    }

    public Giftcard(CustomUser owner, String code, double balance, String pin) {
        this.code = code;
        this.balance = balance;
        this.pin = pin;
    }

    // getters and setters for each variable
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public CustomUser getOwner() {
        return owner;
    }

    public void setOwner(CustomUser owner) {
        this.owner = owner;
    }
}
