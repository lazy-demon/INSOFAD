package com.example.gamewebshop.controller;

import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gamewebshop.dao.GiftcardDAO;
import com.example.gamewebshop.models.Giftcard;

/**
 *
 * @author jeffr
 */
@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://s1148232.student.inf-hsleiden.nl:18232"})
@RequestMapping("/giftcards")
public class GiftcardController {

    private final GiftcardDAO giftcardDAO;

    public GiftcardController(GiftcardDAO giftcardDAO) {
        this.giftcardDAO = giftcardDAO;
    }

    @PostMapping()
    public ResponseEntity<String> createGiftcard(@RequestBody Giftcard giftcard) {
        this.giftcardDAO.createGiftcard(giftcard);

        MultiValueMap<String, String> headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);

        return new ResponseEntity<>("{\"message\": \"Giftcard created\"}", headers, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Giftcard>> getAllGiftcards() {
        return ResponseEntity.ok(this.giftcardDAO.getAllGiftcards());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Giftcard> getGiftcardById(@PathVariable Long id) {
        return ResponseEntity.ok(this.giftcardDAO.getGiftcardById(id));
    }

    // @PutMapping("/{id}")
    // public ResponseEntity<String> updateGiftcard(@PathVariable Long id, @RequestBody GiftcardDTO giftcardDTO) {
    //     this.giftcardDAO.updateGiftcard(giftcardDTO, id);
    //     return ResponseEntity.ok("Updated giftcard with id" + id);
    // }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id) {
        this.giftcardDAO.deleteById(id);
        return ResponseEntity.ok("Giftcard deleted with id " + id);
    }

}
