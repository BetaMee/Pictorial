import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import NewsList from './NewsList';
import NewsSlider from './NewsSlider';

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
    if (!news.success && !news.isReq && news.message !== '') { // 不在请求中，且有错误信息
      return (
        <div>
          fail
        </div>
      );
    }
    if (news.success) {
      const NodeList = news.data.map((data, index) => (
        <NewsList
          img={data.img}
          title={data.title}
          tags={data.tags}
          link={data.link}
          key={index}
        />
      ));
      return (
        <div>
          <div>
            <NewsSlider
              images={[
                news.data[0].img,
                news.data[1].img,
                news.data[2].img,
              ]}
            />
          </div>
          <div>
            {NodeList}
          </div>
        </div>
      );
    }
    // 其余情况则返回loading状态
    return (
      <div>
        loading
      </div>
    );
  }
}

News.propTypes = {
  fetchNewsData: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired,
};

export default News;
