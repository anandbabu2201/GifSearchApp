import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Gif from './Gif'
import { getGifs,getTrendingGif } from "../actions/gifActions";

class GifList extends Component {

  handleMore = () =>{
    let { total_count, count }= this.props.pageSize || {};
    let { searchBy , filterBy }= this.props.params
    if(filterBy.toUpperCase() === 'RANDOM') return;
    if(count>=total_count) return;
    if(searchBy)
    this.props.getGifs(searchBy,count+25);
    else this.props.getTrendingGif(count+25)
  }

  handleScroll = (e) => {
    if (e.target.className !== 'gifList' || this.props.params.filterBy.toUpperCase() === 'RANDOM' ) return;
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
  getGifs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  gifData: state.gifState.gifData.data,
  pageSize : state.gifState.gifData.pagination,
  params:state.gifState.params
});

export default connect(
  mapStateToProps,
  { getGifs,getTrendingGif }
)(GifList);
