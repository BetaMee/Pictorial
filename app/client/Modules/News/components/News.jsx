import React from 'react';
import PropTypes from 'prop-types';
import NewsList from './NewsList';
import NewsSlider from './NewsSlider';

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchNewsData } = this.props;
    fetchNewsData();
  }


  render() {
    const { news } = this.props;
    const newsItems = news.data;
    if (!news.success && !news.isReq && news.message !== '') { // 不在请求中，且有错误信息
      return (
        <div>
          fail
        </div>
      );
    }
    if (news.success) { // 成功则返回列表
      const sliderArr = []; // 要显示的slider列表
      const sliderCount = 3; // 全局定义slider的数量
      for (let i = 0; i < sliderCount; i++) { // 选择三项
        sliderArr.push({
          src: newsItems[i].src,
          alt: newsItems[i].alt,
        });
      }
      const newsNode = newsItems.map((item, index) => {
        if (index > sliderCount - 1) {
          return (
            <NewsList
              src={item.src}
              title={item.title}
              tags={item.tags}
              link={item.link}
              key={index}
            />
          );
        }
        return null;
      });
      return (
        <div>
          <NewsSlider
            items={sliderArr}
          />
          {newsNode}
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
