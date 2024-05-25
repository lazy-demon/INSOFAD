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
    this.giftcardService.createGiftcard(Number(amount))
  }
}