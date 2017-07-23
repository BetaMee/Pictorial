import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import NewsList from '../../components/news/NewsList';
// import CSSStyles from './News.css';

class News extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    const { fetchNewsData } = this.props;
    fetchNewsData();
  }


  render() {
    const { news } = this.props;
  // data: [],
  // message: '',
  // success: false,
  // isReq: false,
    if (!news.success && !news.isReq && news.message !== '') { // 不在请求中，且有错误信息
      return (
        <div>
          fail
        </div>
      );
    }

    const NodeList = news.data.map((data, index) => (
      <NewsList
        img={data.img}
        title={data.title}
        tags={data.tags}
        isReq={news.isReq}
        key={index}
      />
    ));
    return (
      <div>
        {NodeList}
      </div>
    );
  }
}

News.propTypes = {
  fetchNewsData: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired,
};

export default News;
