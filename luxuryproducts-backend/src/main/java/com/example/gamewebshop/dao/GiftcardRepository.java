package com.example.gamewebshop.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.gamewebshop.models.Giftcard;

//maps the Giftcard class to the database using the Long type as default of ID's
@Repository
public interface GiftcardRepository extends JpaRepository<Giftcard, Long> {

    Optional<Giftcard> findById(long id);

}
