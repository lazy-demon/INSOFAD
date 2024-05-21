package com.example.gamewebshop.dto;

public class GiftcardDTO {

    private long id;
    private double balance;
    private String code;
    private String pin;
    private String owner;

    public GiftcardDTO(long id, double balance, String code, String pin, String owner) {
        this.id = id;
        this.balance = balance;
        this.code = code;
        this.pin = pin;
        this.owner = owner;
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

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }
}
