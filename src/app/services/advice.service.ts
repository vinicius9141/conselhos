import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  private api: string = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) {}

  public getRandomAdvice(): Observable<any> {
    return this.http.get<any>(this.api);
  }
}
