package com.example.gamewebshop.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import com.example.gamewebshop.models.Giftcard;

import jakarta.transaction.Transactional;

@Component
public class GiftcardDAO {

    private final GiftcardRepository giftcardRepository;
    private final UserRepository UserRepository;

    public GiftcardDAO(GiftcardRepository repository, UserRepository category) {
        this.giftcardRepository = repository;
        this.UserRepository = category;
    }

    public List<Giftcard> getAllGiftcards() {
        return this.giftcardRepository.findAll();
    }

    public Giftcard getGiftcardById(long id) {
        Optional<Giftcard> giftcard = this.giftcardRepository.findById(id);

        return giftcard.orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "No giftcard found with that id"
        ));
    }

    @Transactional
    public Giftcard createGiftcard(Giftcard giftcard) {
        return this.giftcardRepository.save(giftcard);
    }

    // public void updateGiftcard(GiftcardDTO giftcardDTO, Long id) {
    //     Optional<Giftcard> giftcard = this.giftcardRepository.findById(id);
    //     if (giftcard.isPresent()) {
    //         giftcard.get().setDescription(giftcardDTO.description);
    //         giftcard.get().setName(giftcardDTO.name);
    //         this.giftcardRepository.save(giftcard.get());
    //     }
    // }
    public void deleteById(Long id) {
        this.giftcardRepository.deleteById(id);
    }
}
