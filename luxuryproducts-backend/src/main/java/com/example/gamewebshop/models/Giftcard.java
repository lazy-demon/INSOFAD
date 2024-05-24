package com.example.gamewebshop.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Giftcard {

    @Id
    @GeneratedValue
    private long id;
    private double balance;
    private String code;
    private String pin;
    private String boughtById;
    private String usedById;
    private Date created_at;

    public Giftcard() {
    }

    public Giftcard(String code, double balance, String pin) {
        this.code = code;
        this.balance = balance;
        this.pin = pin;
        this.created_at = new Date();
        // this.boughtById = 
    }

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

    public String getboughtById() {
        return boughtById;
    }

    public void setboughtById(String boughtById) {
        this.boughtById = boughtById;
    }

    public String getUsedById() {
        return usedById;
    }

    public void setUsedById(String usedById) {
        this.usedById = usedById;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }
}
