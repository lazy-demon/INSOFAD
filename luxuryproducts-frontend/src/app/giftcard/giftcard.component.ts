import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Giftcard } from '../models/giftcard.model';
import { GiftcardService } from '../services/giftcard.service';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-giftcard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './giftcard.component.html',
  styleUrl: './giftcard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftcardComponent implements OnInit {
  giftcards: Giftcard[] = [];
  randomValue: number;
  accountbalance: number;

  constructor(private giftcardService: GiftcardService, private authService: AuthService, private userService: UserService) { }

  getGiftcards(): void {
    this.giftcardService.getGiftcards().subscribe(giftcards => {
      this.giftcards = giftcards;
    });
  }

  ngOnInit(): void {
    this.giftcardService.getGiftcards().subscribe(giftcards => {
      this.giftcards = giftcards;
    });

    this.userService.getUserByEmail().subscribe(user => {
      this.accountbalance = user.balance;
    });
  }

  buyGiftcard(amount: string) {
    // if randomValue has more or less then 16 digits, generate a new one. 
    this.randomValue = Number(String(Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000) + String(Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000));
    while (String(this.randomValue).length !== 16) {
      this.randomValue = Number(String(Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000) + String(Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000));
    }


    const newGiftcard = new Giftcard();
    newGiftcard.balance = Number(amount);
    newGiftcard.boughtById = this.authService.getCurrentUserId();
    newGiftcard.code = this.randomValue;
    newGiftcard.pin = (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)
    newGiftcard.created_at = new Date();
    this.giftcardService.createGiftcard(newGiftcard)
  }
}