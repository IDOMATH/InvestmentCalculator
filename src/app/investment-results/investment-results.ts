import { Injectable } from "@angular/core";
import { InvestmentResult } from "./investment-results.model";

@Injectable({ providedIn: "root" })
export class InvestmentService {
  private annualData: InvestmentResult[] = [];

  calculateInvestmentResults(
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  ) {
    this.annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  }

  getInvestmentResults() {
    return this.annualData;
  }
}
