import { Component, Input } from "@angular/core";
import { Tributes } from "../../models/tributes.model";

@Component({
  selector: "app-hiring-scheme-table",
  templateUrl: "./hiring-scheme-table.component.html",
  styleUrls: ["./hiring-scheme-table.component.scss"]
})
export class HiringSchemeTableComponent {
  @Input() salary: string;
  @Input() tributes: Tributes[];
  @Input() liquidSalary: string;
  @Input() hiringScheme: string;
}
