import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Giftcard } from '../models/giftcard.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiftcardService {
  private apiUrl: string = environment.base_url + "/giftcards";
  private _giftcards: BehaviorSubject<Giftcard[]> = new BehaviorSubject<Giftcard[]>([]);

  constructor(private http: HttpClient) {
    this.fetchGiftcards();
  }

  private fetchGiftcards(): void {
    this.http.get<Giftcard[]>(this.apiUrl).subscribe((giftcards: Giftcard[]) => {
      this._giftcards.next(giftcards);
    });
  }

  getGiftcards(): Observable<Giftcard[]> {
    return this._giftcards.asObservable();
  }

  getGiftcard(id: number): Observable<Giftcard> {
    return this.http.get<Giftcard>(`${this.apiUrl}/${id}`);
  }

  createGiftcard(balance: number): void {
    this.http.post<Giftcard>(this.apiUrl, { balance: balance }).subscribe((newGiftcard: Giftcard) => {
      const currentGiftcards = this._giftcards.getValue();
      this._giftcards.next([...currentGiftcards, newGiftcard]);
    });
  }

  updateGiftcard(id: number, giftcard: Giftcard): Observable<Giftcard> {
    return this.http.put<Giftcard>(`${this.apiUrl}/${id}`, giftcard);
  }

  deleteGiftcard(id: number): void {
    this.http.delete<void>(`${this.apiUrl}/${id}`).subscribe(() => {
      const currentGiftcards = this._giftcards.getValue();
      const updatedGiftcards = currentGiftcards.filter(giftcard => giftcard.id !== id);
      this._giftcards.next(updatedGiftcards);
    },
    error => {
      console.error(error);
    });
  }

  private updateGiftcards(giftcard: Giftcard): void {
    const currentGiftcards = this._giftcards.getValue();
    this._giftcards.next([...currentGiftcards, giftcard]);
  }
}