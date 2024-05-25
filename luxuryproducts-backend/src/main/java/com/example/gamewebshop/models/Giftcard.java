package com.example.gamewebshop.models;

import java.util.Date;
import java.util.UUID;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Giftcard {

    @Id
    @GeneratedValue
    private long id;
    private double balance;
    private UUID code;
    private String pin;
    private long boughtById;
    private long usedById;
    @org.hibernate.annotations.CreationTimestamp
    private Date created_at;

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

    public UUID getCode() {
        return code;
    }

    public void setCode(UUID code) {
        this.code = code;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public long getBoughtById() {
        return boughtById;
    }

    public void setBoughtById(long boughtById) {
        this.boughtById = boughtById;
    }

    public long getUsedById() {
        return usedById;
    }

    public void setUsedById(long usedById) {
        this.usedById = usedById;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }
}
