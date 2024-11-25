import React from "react";
import Nav from "./nav";

const Home = () => {
  return (
    <div>
      <Nav />

      <div className="div1-trans">
        <div className="available-balance">
          <h3>Your available Balance :</h3>

          <h4>
            $$$$$$$ <span style={{ color: "green" }}>KWD</span>
          </h4>
        </div>
      </div>

      <div className="div2-trans">
        <div className="deposit-withdraw">
          <h3>Deposit/Withdraw</h3>
          <h4>Amount</h4>
          <input
            className="amount-search-trans"
            type="text"
            placeholder="Amount"
          />
          <button className="submit-button-trans">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
