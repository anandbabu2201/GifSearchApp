import React, { Component } from "react";
import PropTypes from "prop-types";

class Gif extends Component {

  render() {
    return (<div className="eachBlock widescreen-4 desktop-4 tablet-landscape-3 tablet-2 mobile-landscape-2 mobile-1">
      <img className="eachGif" alt={this.props.gif.title}
      src={this.props.gif.images.downsized.url}/>
    </div>)

  }
}

Gif.propTypes = {
  gif: PropTypes.object.isRequired
};

export default Gif;
