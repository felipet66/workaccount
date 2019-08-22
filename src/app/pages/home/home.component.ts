import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Salary } from "../shared/salary.model";
import { SalaryService } from "../shared/salary.service";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [SalaryService]
})
export class HomeComponent implements OnInit {
  public errorMessages = false;
  public formSalary: FormGroup;
  public salaryResponse = [];
  public loader = false;

  constructor(
    private formBuilder: FormBuilder,
    private salaryService: SalaryService
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
            this.salaryResponse.push(res);
          },
          (error: HttpErrorResponse) => {
            this.handleError();
          }
        );
    }, 1500);
  }

  handleError(): void {
    this.loader = false;
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "Algo deu errado, por favor tente novamente mais tarde! :(",
      confirmButtonColor: "darkgreen"
    });
    return;
  }
}
