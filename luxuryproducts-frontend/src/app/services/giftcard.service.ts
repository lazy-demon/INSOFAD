import { Injectable } from '@angular/core';
import { Giftcard } from '../models/giftcard.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GiftcardService {
  private baseUrl: string = environment.base_url + "/giftcards";

  constructor(private http: HttpClient) {
  }

  getGiftcards(): Observable<Giftcard[]> {
    return this.http.get<Giftcard[]>(this.baseUrl);
  }

  addGiftcard(giftcard: Giftcard) {
    return this.http.post(this.baseUrl, giftcard);
  }
  // Implement methods for CRUD operations
}
