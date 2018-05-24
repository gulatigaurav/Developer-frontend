import React, { Component } from "react";
import { Route } from "react-router-dom";

import Proposal from "./Proposal";
import FullProposal from "./FullProposal";

class ProposalList extends Component {
  state = {
    proposals: [
      {
        id: 1,
        customer: "XYZ Solutions",
        tools: "Ruby on Rails",
        portfolio_url: "http://google.com",
        estimated_hours: 45,
        hourly_rate: 26,
        weeks_to_complete: 7,
        client_email: "gauravgulati9c@gmail.com"
      },
      {
        id: 2,
        customer: "Gaurav Gulati",
        tools: "Ruby on Rails, Machine Learning using Python",
        portfolio_url: "http://google.com",
        estimated_hours: 35,
        hourly_rate: 25,
        weeks_to_complete: 8,
        client_email: "gauravgulati9c@gmail.com"
      }
    ]
  };

  postSelectedHandler = id => {
    // this.props.history.push({pathname: '/posts/' + id});
    this.props.history.push("/proposals/" + id);
  };

  render() {
    let proposals = this.state.proposals.map(proposal => {
      return (
        // <Link to={'/posts/' + post.id} key={post.id}>
        <Proposal
          key={proposal.id}
          customer={proposal.customer}
          portfolio_url={proposal.portfolio_url}
          estimated_hours={proposal.estimated_hours}
          hourly_rate={proposal.hourly_rate}
          weeks_to_complete={proposal.weeks_to_complete}
          client_email={proposal.client_email}
          clicked={() => this.postSelectedHandler(proposal.id)}
          // clicked={() => this.postSelectedHandler( proposal.id )
        />
        // </Link>
      );
    });
    console.log(this.props);
    return (
      <div>
        <h3> Proposals Dashboard</h3>
        <div>
          <section className="Proposals">{proposals}</section>
          <Route
            path={this.props.match.url + "/:id"}
            component={FullProposal}
          />
        </div>
      </div>
    );
  }
}

export default ProposalList;
