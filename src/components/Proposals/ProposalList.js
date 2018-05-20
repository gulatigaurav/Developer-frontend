import React, { Component } from "react";

class ProposalList extends Component {
  render() {
    const proposals = [
      {
        id: 1,
        customer: "XYZ Solutions",
        tools: "Ruby on Rails",
        portfolio_url: "http://google.com",
        estimated_hours: 45,
        hourly_rate: 26,
        weeks_to_complete: 7,
        client_email: "gauravgulati9c@gmail.com"
      }
    ];

    const listItems = proposals.map(x => (
      <div>
        {x.id}
        <h1>{x.customer}</h1>
        <p>
          <a href={x.portfolio_url}> Online Portfolio </a>

          <div>{x.tools}</div>
          <div>{x.estimated_hours}</div>
        </p>
        <hr />
      </div>
    ));

    return (
      <div>
        <h3> Proposals Dashboard</h3>
        {listItems}
      </div>
    );
  }
}

export default ProposalList;
