import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          //the value is set to the state's term value, which is blank by default
          value={this.state.term}
          //the onChange fires off the onInputChange function with the event that triggered the change, such as a key press
          //onInputChange takes the value of the event target
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  //onInputChange takes in a searched term from the onChange event trigger
  //the state's term value is changed to the value of the event
  //onSearchTermChange={term => this.videoSearch(term)}
  //onSearchTermChange is the function we passed down to be called with the newly serached term
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
