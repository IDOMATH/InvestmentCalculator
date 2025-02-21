import { Component, Input, inject } from "@angular/core";
import { InvestmentResult } from "./investment-results.model";
import { InvestmentService } from "./investment-results";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  results = this.investmentService.getInvestmentResults();
}
