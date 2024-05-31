import React from "react";
import "./Results.scss";
import { calculateInvestmentResults, formatter } from "../../utils/investment";

const Results = (props) => {
  const { userInput } = props;
  const resultsData = calculateInvestmentResults(userInput);
  let totalInterest = 0;
  const initialInvestment =
    resultsData?.[0]?.valueEndOfYear -
    resultsData?.[0]?.interest -
    resultsData?.[0]?.annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          // totalInterest += yearData.interest;
          const totalInterest =
            yearData?.valueEndOfYear -
            yearData?.annualInvestment * yearData?.year -
            initialInvestment;

          return (
            <tr key={yearData.year}>
              <td>{yearData?.year}</td>
              <td>{formatter.format(yearData?.valueEndOfYear)}</td>
              <td>{formatter.format(yearData?.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>
                {formatter.format(yearData?.valueEndOfYear - totalInterest)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
