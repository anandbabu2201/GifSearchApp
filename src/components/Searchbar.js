import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../actions/gifActions";

class Searchbar extends Component {

  state = {
    searchText:''
  }

  callGifData=(e)=>{
    console.log('anand',e)
    this.setState({searchText:e.target.value})
  }


  render() {
    return (
       <div class="component compTextBox " >
           <input name="gifSearch" class="inputSearch" type="text" placeholder="search GIF"
           onChange={this.callGifData} value={this.state.searchText} />
          </div>
    );
  }
}

Searchbar.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  gifData: state.gifData
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Searchbar);
