import { Component, OnInit, OnChanges } from "@angular/core";

import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnChanges {
  private cltValue: any;
  private pjValue: any;
  private cltValues = [
    {
      INSS: [{}],
      PJ: [{}]
    }
  ];
  public errorMessages = false;

  public calculateForm = new FormGroup({
    value: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.isInputValid();
  }

  isInputValid() {
    if (this.calculateForm.value !== "") {
      this.errorMessages = true;
    }
  }

  calculateIncomeCLT(value: any): any {
    let $value = value;
    console.log("CLICK" + value);
    if ($value >= 1903.98 && $value <= 2826.65) {
      // 7.5%
      $value /= 1.075;
      console.log("Üno" + $value);
    } else if ($value >= 2826.66 && $value <= 3751.05) {
      // 15%
      $value /= 1.15;
      console.log("doub" + $value);
    } else if ($value >= 3751.06 && $value <= 4664.68) {
      // 22,5%
      $value /= 1.225;
      console.log("three" + $value);
    } else if ($value >= 4664.69) {
      // 27,5 %
      $value /= 1.275;
      console.log("four" + $value);
    }
  }
}
