import React, { Component } from "react";
import PropTypes from "prop-types";

class Gif extends Component {

  constructor(props){
    super(props);
    this.imgRef= React.createRef();
    this.state={
      playGif:false
    }
  }

  getExtenstion(src){
    let ext ;
    ext = src.toLowerCase().substring(src.lastIndexOf(".") + 1).trim();
    return ext;
  }

  loadGif =()=>{
    let {images} = this.props.gif
    if(this.imgRef && this.imgRef.current && this.getExtenstion(this.imgRef.current.src) === "jpg") {
     this.imgRef.current.src=images.downsized.url
     this.setState({playGif:true})
    }
     else {
     this.imgRef.current.src=images["480w_still"].url;
     this.setState({playGif:false})
     }
  }

  render() {
    let { title, images} = this.props.gif
    return (<div onClick={this.loadGif} className="eachBlock widescreen-4 desktop-4 tablet-landscape-3 tablet-2 mobile-landscape-2 mobile-1">
      <img  ref={this.imgRef} className="eachGif pause" alt={title}
      src={images["480w_still"].url}/>
     {!this.state.playGif?<div className="btn"></div>:''}
    </div>)

  }
}

Gif.propTypes = {
  gif: PropTypes.object.isRequired
};

export default Gif;
