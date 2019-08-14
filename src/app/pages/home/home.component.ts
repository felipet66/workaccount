import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Salary } from "../shared/salary.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  private result = [
    {
      INSS: {
        valorBruto: "100,00",
        valorLiquido: "100.00",
        ferias13: 10,
        fgts: 1231,
        inss: 12321,
        irrf: 1002,
        pis: 1231,
        custoMensalContratante: 9000
      },
      PJ: {
        valorBruto: "100,00",
        valorLiquido: "100.00",
        ferias13: 0,
        fgts: 0,
        inss: 12321,
        irrf: 0,
        pis: 0,
        custoMensalContratante: 11000
      }
    }
  ];
  public errorMessages = false;
  public formSalary: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm(new Salary());
  }

  createForm(salary: Salary) {
    this.formSalary = this.formBuilder.group({
      salary: new FormControl(salary.salary)
    });
  }

  onSubmit() {
    console.info(this.formSalary.value.salary);
  }
}
