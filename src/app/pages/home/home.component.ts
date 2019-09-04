import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Salary } from '../shared/models/salary.model';
import { SalaryService } from '../shared/services/salary.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoggerService } from '../shared/services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SalaryService]
})
export class HomeComponent implements OnInit {
  public errorMessages = false;
  public formSalary: FormGroup;
  public salaryResponse: Salary[];
  public loader = false;
  public salary = 0;

  constructor(
    private formBuilder: FormBuilder,
    private salaryService: SalaryService,
    private loggerService: LoggerService
  ) {}

  ngOnInit() {
    this.createForm(new Salary());
  }

  createForm(salary: Salary) {
    this.formSalary = this.formBuilder.group({
      salary: new FormControl(salary.salary)
    });
  }

  onSubmit() {
    this.loader = true;
    setTimeout(() => {
      this.salaryService
        .sendSalaryTottality(this.formSalary.value.salary)
        .subscribe(
          (res: Salary[]) => {
            this.loader = false;
            this.salaryResponse = res;
          },
          (error: HttpErrorResponse) => {
            this.handleError(error);
          }
        );
    }, 1500);
  }

  handleError(error: HttpErrorResponse): void {
    this.loader = false;
    this.loggerService.showErros(error);
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Algo deu errado, por favor tente novamente mais tarde! :(',
      confirmButtonColor: 'darkgreen'
    });
  }
}
