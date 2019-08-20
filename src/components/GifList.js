import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Gif from './Gif'
import { getGifs,getInfintyGifs } from "../actions/gifActions";

class GifList extends Component {

  handleMore = () =>{
    let { total_count, count ,offset}= this.props.pageSize || {}
    if(count>=total_count) return;
    this.props.getInfintyGifs('haha',count+25);
  }

  handleScroll = (e) => {
    if (e.target.className !== 'gifList') return;
    console.log('anand',e.target.offsetHeight,e.target.scrollTop,e.target.scrollHeight)
    if ((e.target.offsetHeight + e.target.scrollTop) === (e.target.scrollHeight)) this.handleMore();
  }


  render() {
    const { gifData = [] } = this.props;
   return (
      <div className="gifList" onScroll={this.handleScroll} >
        {Array.isArray(gifData)?gifData.map(each => (
          <Gif key={each.id} gif={each} />
        )):<Gif gif={gifData} />}
      </div>
    );
  }
}

GifList.propTypes = {
  gifData: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
  getGifs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  gifData: state.gifState.gifData.data,
  pageSize : state.gifState.gifData.pagination
});

export default connect(
  mapStateToProps,
  { getGifs,getInfintyGifs }
)(GifList);
