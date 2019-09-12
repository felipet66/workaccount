import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  showErros(error: HttpErrorResponse) {
      console.error(`
        Status error: ${error.status} \n
        Message error: ${error.message}
      `);
  }
}
