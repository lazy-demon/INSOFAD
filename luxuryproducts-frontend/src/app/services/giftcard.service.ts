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

  createGiftcard(giftcard: Giftcard): void {
    this.http.post<Giftcard>(this.apiUrl, giftcard).subscribe((newGiftcard: Giftcard) => {
      const currentGiftcards = this._giftcards.getValue();
      this._giftcards.next([...currentGiftcards, newGiftcard]);
    });
  }

  updateGiftcard(id: number, giftcard: Giftcard): Observable<Giftcard> {
    return this.http.put<Giftcard>(`${this.apiUrl}/${id}`, giftcard);
  }

  deleteGiftcard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private updateGiftcards(giftcard: Giftcard): void {
    const currentGiftcards = this._giftcards.getValue();
    this._giftcards.next([...currentGiftcards, giftcard]);
  }
}