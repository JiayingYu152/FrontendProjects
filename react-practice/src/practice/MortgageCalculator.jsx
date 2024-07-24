import "./mortgageCalculator.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MortgageCalculator = () => {
    const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

    const [monthlyPayment, setMonthlyPayment] = useState("");
    const [totalPayment, setTotalPayment] = useState("");
    const [totalInterest, setTotalInterest]  = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const loanAmount = parseFloat(data.get("loan-amount"));
    const monthlyInterestRate = parseFloat(data.get("annual-interest-rate")) / 100 / 12;
    const loanTermInMonths = parseFloat(data.get("loan-term")) * 12;

    const monthlyPaymentAmount = (loanAmount * monthlyInterestRate) / (1 - 1 / Math.pow(1 + monthlyInterestRate, loanTermInMonths));
    const totalPayment = monthlyPaymentAmount * loanTermInMonths;
    const currencyFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

    setMonthlyPayment(currencyFormatter.format(monthlyPaymentAmount));
    setTotalPayment(currencyFormatter.format(totalPayment));
    setTotalInterest(currencyFormatter.format(totalPayment - loanAmount));
  };

  return (
    <div className="mortgage-calculator-page-container">
         <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>

      <h1>Mortgage Calculator</h1>
      <form className="mortgage-calculator-form" onSubmit={onSubmit}>
        <label>
          Loan amount ($):
          <input
            type="number"
            name="loan-amount"
            defaultValue="100000"
            min="1"
            required
          />
        </label>

        <label>
          Annual interest rate (%):
          <input
            type="number"
            name="annual-interest-rate"
            defaultValue="5"
            step="0.01"
            min="0.01"
            required
          />
        </label>

        <label>
          Loan term (in years)
          <input
            type="number"
            name="loan-term"
            defaultValue="10"
            min="1"
            required
          />
        </label>

        <button type="submit">Start Calculate</button>
      </form>
      <br />

      <div aria-live="polite" className="mortgage-calculator-results">
        <div>
          Monthly mortgage payment: <strong>{monthlyPayment}</strong>
        </div>
        <div>
          Total payment amount: <strong>{totalPayment}</strong>
        </div>
        <div>
          Total interest paid: <strong>{totalInterest}</strong>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
