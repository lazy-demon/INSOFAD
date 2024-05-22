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
  giftcards: Giftcard[];
  constructor(private giftcardService: GiftcardService, private authService: AuthService) { }

  ngOnInit(): void {
    this.giftcardService.getGiftcards().subscribe(giftcards => {
      this.giftcards = giftcards;
    });
  }

  buyGiftcard(amount: string) {
    const newGiftcard = new Giftcard();
    newGiftcard.balance = Number(amount);
    newGiftcard.owner_id = this.authService.getCurrentUserId();
    newGiftcard.code = Number(String(Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000) + String(Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000));
    newGiftcard.pin = (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)

    this.giftcardService.addGiftcard(newGiftcard).subscribe(
      (response) => {
        console.log('Giftcard purchased successfully');
      },
      (error) => {
        console.log('Error purchasing giftcard', error);
      }
    );
  }
}