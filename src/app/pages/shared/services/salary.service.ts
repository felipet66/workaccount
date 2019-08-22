import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Salary } from "../models/salary.model";
import { Injectable } from "@angular/core";

@Injectable()
export class SalaryService {
  private apiPath = "http://localhost:4567";
  constructor(private httpc: HttpClient) {}

  public sendSalaryTottality(salaryTotallity: string): Observable<Salary[]> {
    return this.httpc.get<Salary[]>(
      `${this.apiPath}/salary?salary=${salaryTotallity}`
    );
  }
}
