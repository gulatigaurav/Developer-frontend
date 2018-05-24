import React, { Component } from "react";

class FullProposal extends Component {
  state = {
    loadedProposal: null
  };

  // get the proposal from api call
  render() {
    console.log("Full Proposal: ", this.props);
    return (
      <div>
        <h3> Full Proposal </h3>
        // Modal Should come here
        <button onClick={this.props.history.goBack}> Close</button>
      </div>
    );
  }
}

export default FullProposal;
