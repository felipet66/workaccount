import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from '../models/salary.model';
import { Injectable } from '@angular/core';
import { URL_API } from '../config/api';

@Injectable()
export class SalaryService {
  constructor(private httpc: HttpClient) {}

  public sendSalaryTottality(salaryTotallity: string): Observable<Salary[]> {
    return this.httpc.get<Salary[]>(
      `${URL_API}/salary?salary=${salaryTotallity}`
    );
  }
}
