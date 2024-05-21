package com.example.gamewebshop.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import com.example.gamewebshop.models.Giftcard;

@Component
public class GiftcardDAO {

    private final GiftcardRepository giftcardRepository;

    public GiftcardDAO(GiftcardRepository repository) {
        this.giftcardRepository = repository;
    }

    public List<Giftcard> getAllGiftcards() {
        return this.giftcardRepository.findAll();
    }

    public Giftcard getGiftcardById(long id) {
        Optional<Giftcard> giftcard = this.giftcardRepository.findById(id);

        return giftcard.orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "No Giftcard found with that id"
        ));
    }

    public void deleteById(Long id) {
        this.giftcardRepository.deleteById(id);
    }
}
