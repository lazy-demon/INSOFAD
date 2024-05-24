import { Component, OnInit } from '@angular/core';
import { Giftcard } from '../models/giftcard.model';
import { GiftcardService } from '../services/giftcard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-giftcard-admin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './giftcard-admin.component.html',
  styleUrl: './giftcard-admin.component.scss'
})

export class GiftcardAdminComponent implements OnInit {
  giftcards: Giftcard[];

  constructor(private giftcardService: GiftcardService) { }

  ngOnInit() {
    this.getGiftcards();
  }

  getGiftcards() {
    this.giftcardService.getGiftcards().subscribe(giftcards => {
      this.giftcards = giftcards;
    });
  }

  createGiftcard(giftcard: Giftcard) {
    this.giftcardService.createGiftcard(giftcard)
  }

  updateGiftcard(id: number, giftcard: Giftcard) {
    this.giftcardService.updateGiftcard(id, giftcard).subscribe(() => {
      this.getGiftcards();
    });
  }

  deleteGiftcard(id: number) {
    this.giftcardService.deleteGiftcard(id).subscribe(() => {
      this.getGiftcards();
    });
  }
}