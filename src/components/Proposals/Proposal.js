import React from "react";

const Proposal = props => (
  <div>
    <h1>{props.id}</h1>
    <div>{props.customer}</div>
    <div>{props.portfolio_url}</div>
    <div>{props.client_email}</div>
    <div>{props.weeks_to_complete}</div>
    <div>{props.hourly_rate}</div>
    <button onClick={props.clicked}>Click me</button>
  </div>
);

export default Proposal;
