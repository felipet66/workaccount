import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Salary } from "../shared/salary.model";
import { SalaryService } from "../shared/salary.service";

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
        .subscribe(res => {
          this.loader = false;
          this.salaryResponse.push(res);
          console.log(this.salaryResponse);
        });
    }, 2000);
    console.info(this.formSalary.value.salary);
  }
}
