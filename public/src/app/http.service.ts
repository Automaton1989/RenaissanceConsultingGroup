import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  [x: string]: any;
  private _stream$ = new BehaviorSubject("");
  public stream$ = this._stream$.asObservable();

  constructor(private _http: HttpClient) { 
  
  }
  
  send(session : any) 
  {
    this._stream$.next(session)
  }

}
