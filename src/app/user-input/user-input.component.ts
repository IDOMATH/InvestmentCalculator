import { Component, Output, EventEmitter, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InvestmentResult } from "../investment-results/investment-results.model";
import { InvestmentService } from "../investment-results/investment-results";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  enteredInitialInvestment = 0.0;
  enteredAnnualInvestment = 0.0;
  enteredExpectedReturn = 5.0;
  enteredDuration = 10;
  private investmentService = inject(InvestmentService);

  onSubmit() {
    this.investmentService.calculateInvestmentResults(
      this.enteredInitialInvestment,
      this.enteredDuration,
      this.enteredExpectedReturn,
      this.enteredAnnualInvestment
    );
    this.enteredInitialInvestment = 0.0;
    this.enteredAnnualInvestment = 0.0;
    this.enteredExpectedReturn = 5.0;
    this.enteredDuration = 10;
  }
}
