import React, { Component } from "react";

class NewProposal extends Component {
  state = {
    customer: "",
    portfolio_url: "http://",
    tools: "",
    estimated_hours: 0,
    hourly_rate: 0,
    weeks_to_complete: 0,
    client_email: ""
  };

  handleCustomerChange = () => {
    this.setState({
      customer: this.refs.customer.value
    });
  };

  handleToolsChange = () => {
    this.setState({
      tools: this.refs.tools.value
    });
  };
  handlePortfolioChange = () => {
    this.setState({
      portfolio_url: this.refs.portfolio_url.value
    });
  };
  handleEstimatedHoursChange = () => {
    this.setState({
      estimated_hours: this.refs.estimated_hours.value
    });
  };
  handleHourlyRateChange = () => {
    this.setState({
      hourly_rate: this.refs.hourly_rate.value
    });
  };
  handleWeekCompleteChange = () => {
    this.setState({
      weeks_to_complete: this.refs.weeks_to_complete.value
    });
  };
  handleClientEmailChange = () => {
    this.setState({
      client_email: this.refs.client_email.value
    });
  };

  render() {
    return (
      <div>
        <h3>New Proposal</h3>
        <form>
          <label>
            Customer:
            <input
              type="text"
              ref="customer"
              defaultValue={this.state.customer}
              onChange={this.handleCustomerChange}
              required
            />
          </label>
          <label>
            Tools:
            <input
              type="text"
              ref="tools"
              defaultValue={this.state.tools}
              onChange={this.handleToolsChange}
              required
            />
          </label>

          <label>
            Portfolio URL:
            <input
              type="text"
              ref="portfolio_url"
              defaultValue={this.state.portfolio_url}
              onChange={this.handlePortfolioChange}
              required
            />
          </label>

          <label>
            Estimated Hours:
            <input
              type="number"
              ref="estimated_hours"
              defaultValue={this.state.estimated_hours}
              onChange={this.handleEstimatedHoursChange}
              required
            />
          </label>

          <label>
            Hourly Rate:
            <input
              type="number"
              ref="hourly_rate"
              defaultValue={this.state.hourly_rate}
              onChange={this.handleHourlyRateChange}
              required
            />
          </label>

          <label>
            Weeks to Complete:
            <input
              type="number"
              ref="weeks_to_complete"
              defaultValue={this.state.weeks_to_complete}
              onChange={this.handleWeekCompleteChange}
              required
            />
          </label>

          <label>
            Client Email (Optional):
            <input
              type="text"
              ref="client_email"
              defaultValue={this.state.client_email}
              onChange={this.handleClientEmailChange}
            />
          </label>
        </form>

        <div>
          <p>Hi {this.state.customer},</p>

          <p>
            It was a pleasure getting to meet with you and review your project
            requirements, I believe it is a great fit for the types of
            applications that I build out. Please feel free to check out some of
            my past projects <a href={this.state.portfolio_url}>here</a>.
          </p>

          <p>
            To successfully build out the application I will be utilizing{" "}
            {this.state.tools}, and a number of other tools to ensure that the
            project follows industry wide best practices.
          </p>

          <p>
            Ensuring that you are fully informed is one of my top priorities, so
            in addition to incorporating everything that we discussed, I will
            also be creating a project management dashboard and sending you a
            project update message daily so that you can have a transparent view
            of the development as it takes place.
          </p>

          <p>
            To accomplish the project and meet the requirements that we
            discussed, I am estimating that it will take{" "}
            {this.state.estimated_hours} hours in development time to complete.
            The project should take {this.state.weeks_to_complete} weeks to
            complete and with my hourly rate of {this.state.hourly_rate}/hour,
            the estimated total will be{" "}
            {this.state.hourly_rate * this.state.estimated_hours}.
          </p>

          <p>
            The next step from here is to set up a meeting to finalize the
            project and sign contracts.
          </p>

          <p>I am excited to working with you and build out this project.</p>
        </div>
      </div>
    );
  }
}

export default NewProposal;
