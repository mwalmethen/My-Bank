import React, { useState, useEffect, useContext } from "react";
import Nav from "./nav";
import { useMutation } from "@tanstack/react-query";
import { deposit, withdraw, getProfile } from "../API/auth";
import UserContext from "../Context/userContext";

const Home = () => {
  const [amount, setAmount] = useState("");
  const { user, setUser } = useContext(UserContext);

  // Deposit mutation
  const { mutate: depositMutate } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit(amount),
    onSuccess: (data) => {
      const updatedBalance = data?.balance || user.balance + parseFloat(amount); // fallback if no balance in response
      setUser((prev) => ({
        ...prev,
        balance: updatedBalance,
      }));
      localStorage.setItem("balance", updatedBalance);
    },
    onError: (error) => {
      console.log("Error during deposit:", error);
    },
  });

  // Withdraw mutation
  const { mutate: withdrawMutate } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw(amount),
    onSuccess: (data) => {
      const updatedBalance = data?.balance || user.balance - parseFloat(amount); // fallback if no balance in response
      setUser((prev) => ({
        ...prev,
        balance: updatedBalance,
      }));
      localStorage.setItem("balance", updatedBalance);
    },
    onError: (error) => {
      console.log("Error during withdraw:", error);
    },
  });

  // Fetch profile when component mounts to sync balance with backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        if (profile && profile.balance !== undefined) {
          setUser((prev) => ({
            ...prev,
            balance: profile.balance, // Set initial balance from profile data
          }));
          localStorage.setItem("balance", profile.balance); // Persist balance in localStorage
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [setUser]);

  return (
    <div>
      <Nav />

      <div className="div1-trans">
        <div className="available-balance">
          <h3>Your available Balance :</h3>
          <h4>
            {user?.balance?.toFixed(2)}{" "}
            <span style={{ color: "green" }}>KWD</span>
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
          <div className="trans-withdraw-deposit-div1">
            <button
              className="deposit-button-trans"
              onClick={() => {
                if (amount > 0) {
                  depositMutate(); // Call deposit mutation
                } else {
                  console.log("Please enter a valid deposit amount.");
                }
              }}
            >
              Deposit
            </button>
            <button
              className="withdraw-button-trans"
              onClick={() => {
                if (amount > 0 && user?.balance >= amount) {
                  withdrawMutate(); // Call withdraw mutation
                } else {
                  console.log(
                    "Insufficient balance or invalid amount for withdrawal."
                  );
                }
              }}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
