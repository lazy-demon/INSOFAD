import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Giftcard } from '../models/giftcard.model';
import { GiftcardService } from '../services/giftcard.service';

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

  constructor(private giftcardService: GiftcardService) { }

  ngOnInit(): void {
    this.giftcardService.getGiftcards().subscribe(giftcards => {
      this.giftcards = giftcards;
    });



  }

}