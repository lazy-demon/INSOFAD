package com.example.gamewebshop.services;

import com.example.gamewebshop.dao.GiftcardDAO;
import com.example.gamewebshop.models.CustomUser;
import com.example.gamewebshop.models.Giftcard;

import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class GiftcardService {

    private final GiftcardDAO giftcardDAO;

    public GiftcardService(GiftcardDAO giftcardDAO) {
        this.giftcardDAO = giftcardDAO;
    }

    public Giftcard createGiftcard(double balance, CustomUser user) {
        Giftcard giftcard = new Giftcard();

        giftcard.setBalance(balance);
        giftcard.setBoughtById(user.getId());
        giftcard.setPin(generatePin(4));

        return this.giftcardDAO.createGiftcard(giftcard);
    }

    public static String generatePin(int length) {
        if (length < 1 || length > 4) {
            throw new IllegalArgumentException("PIN length must be between 1 and 4");
        }

        int upperBound = (int) Math.pow(10, length);

        Random random = new Random();
        int    number = random.nextInt(upperBound);
        return String.format("%0" + length + "d", number);
    }

    // @Override
    // public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    //     CustomUser customUser = userDAO.findByEmail(email);

    //     return new User(
    //             email,
    //             customUser.getPassword(),
    //             Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));
    // }
}
