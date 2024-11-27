import React from "react";
import Nav from "./nav";
import { getTransactions } from "../API/auth";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Transactions = () => {
  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });
  console.log(data);
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");

  const filteredTransactions = (data || []).filter((transaction) => {
    if (type === "All") {
      return true;
    }
    return transaction?.type?.toLowerCase() === type.toLowerCase();
  });

  const searchByType = filteredTransactions.filter((transaction) => {
    return transaction?.type?.includes(search);
  });
  const searchByAmount = searchByType.filter((transaction) => {
    return transaction?.amount?.toString().includes(search2);
  });

  const transactions = searchByAmount?.map((transaction) => (
    <div className="div-user">
      <p>
        <strong>Type:</strong> {transaction?.type}
      </p>
      <p>
        <strong>Amount:</strong> {transaction?.amount}
      </p>
      <p>
        <strong>Date:</strong>
        {new Date(transaction?.createdAt).toLocaleString()}
      </p>
    </div>
  ));
  return (
    <div>
      <Nav />
      <h3 className="h3-trans">
        You can search your transactions or use the type selector
      </h3>
      <div className="search-bar-trans-div">
        <input
          className="search-trans"
          type="search"
          placeholder="Search by amount"
          onChange={(event) => setSearch2(event.target.value)}
          x
        />
      </div>
      <div className="search-bar-trans-div-type">
        <input
          className="search-trans"
          type="search"
          placeholder="Search by type"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="trans-withdraw-deposit-div">
        <select
          onChange={(event) => setType(event.target.value)}
          className="form-select"
        >
          <option value="" selected>
            Type
          </option>
          <option value="All">All</option>
          <option value="Deposit">Deposit</option>
          <option value="Withdraw">Withdraw</option>
        </select>
      </div>
      <div className="all">{transactions}</div>
    </div>
  );
};

export default Transactions;
