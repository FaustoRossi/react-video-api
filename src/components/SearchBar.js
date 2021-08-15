import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui inverted segment">
        <form onSubmit={this.onFormSubmit} className="ui inverted form">
          <div className="field">
            <label>Buscar video</label>
            <div class="ui left icon input">
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <i class="inverted circular search link icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
