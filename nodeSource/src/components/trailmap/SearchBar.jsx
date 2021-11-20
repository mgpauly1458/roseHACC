import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.parentCallback(this.state.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} onExit={this.handleSubmit }/>
          </label>
        </form>
      );
    }
  }
export default SearchBar  