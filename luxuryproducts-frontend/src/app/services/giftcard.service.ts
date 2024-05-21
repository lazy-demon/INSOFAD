import { Injectable } from '@angular/core';
import { Giftcard } from '../models/giftcard.model';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GiftcardService {
    private baseUrl: string = environment.base_url + "/products";

    constructor(private http: HttpClient) {
    }
  
    getGiftcards():  Observable<Giftcard[]>  {
        return this.http.get<Giftcard[]>(this.baseUrl);
      }
  // Implement methods for CRUD operations
}