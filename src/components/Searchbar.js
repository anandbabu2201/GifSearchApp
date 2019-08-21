import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGifs,getRandomGif,getTrendingGif,getDataChangeEvent } from "../actions/gifActions";

class Searchbar extends Component {

  state = {
    filterBy:'',
    searchBy:''
  }

  callGifData=(e)=>{
    this.setState({searchBy:e.target.value})
    this.props.getGifs(e.target.value)
    if(this.state.filterBy) this.setState({filterBy:''})
    this.props.getDataChangeEvent({
      filterBy:'',
      searchBy:e.target.value
    });
  }

  getTrendingGif= _=>{
    this.setState({filterBy:'Trending'})
    if(this.state.searchBy)
     this.setState({searchBy:''})
    this.props.getTrendingGif();
    this.props.getDataChangeEvent({
      filterBy:'Trending',
      searchBy:''
    });
  }

  getRandomGif = _ =>{
    this.setState({filterBy:'Random'})
    this.props.getRandomGif(this.state.searchBy);
    this.props.getDataChangeEvent({
      filterBy:'Random',
      searchBy:this.state.searchBy
    });
  }


  render() {
    return (
      <React.Fragment>
       <div className="component " >
         <div className="searchBox">
           <input name="gifSearch" className="inputSearch" type="text" placeholder="search GIF"
           onChange={this.callGifData} value={this.state.searchBy} />
          </div>
           <div className="actionButtons">
           <button className="button" onClick={this.getRandomGif} name="randomButton">Random Gif</button>
          <button className="button" onClick={this.getTrendingGif} name="trendingButton">Trending Gifs</button>
            </div>
          </div>
          {this.state.searchBy || this.state.filterBy ? <h2 className="heading">showing "{this.state.filterBy || this.state.searchBy}" Gif(s)</h2>:
            ''}
          </React.Fragment>
    );
  }
}

Searchbar.propTypes = {
  getGifs: PropTypes.func.isRequired,
  getTrendingGif: PropTypes.func.isRequired,
  getRandomGif: PropTypes.func.isRequired,
  getDataChangeEvent:PropTypes.func.isRequired
};


export default connect(null,
  { getGifs,getTrendingGif,getRandomGif,getDataChangeEvent }
)(Searchbar);
