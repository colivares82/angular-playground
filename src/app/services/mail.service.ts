import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  message = 'You have some email';
  constructor() { }
}
