import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import S from './NewsSlider.css';

const SliderItem = ({ count, item }) => {
  const width = `${100 / count}%`;
  return (
    <li className={S.sliderItem} style={{ width }}>
      <img src={item.src} alt={item.alt} />
    </li>
  );
};


const SliderDots = ({ count, nowLocal }) => {
  const dotNodes = [];
  let dotStyle = '';
  for (let i = 0; i < count; i++) {
    dotStyle = classNames(S.sliderDot, i === nowLocal ? S.sliderDotSelected : '');
    dotNodes.push(
      <span
        key={`dot${i}`}
        className={dotStyle}
      />,
    );
  }

  return (
    <div className={S.sliderDotWarp}>
      {dotNodes}
    </div>
  );
};

/**
 * 轮播组件
 *
 * @class NewsSlider
 * @extends {React.Component}
 */
class NewsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0,
    };
  }

  componentDidMount() {
    this.goPlay();
  }

  componentWillUnmount() {
    clearInterval(this.autoPlayFlag);
  }

  // 向前向后多少
  turn = (n) => {
    const { items } = this.props;
    let _n = this.state.nowLocal + n;
    if (_n < 0) {
      _n += items.length;
    }
    if (_n >= items.length) {
      _n -= items.length;
    }
    this.setState({ nowLocal: _n });
  }
  // 开始自动轮播
  goPlay = () => {
    const { autoplay, delay } = this.props;
    if (autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, delay * 1000);
    }
  }
  // 暂停自动轮播
  pausePlay = () => {
    clearInterval(this.autoPlayFlag);
  }
  render() {
    const { items, dots, speed } = this.props;
    const count = items.length;
    const itemNodes = items.map((item, idx) => (
      <SliderItem
        item={item}
        count={count}
        key={`item${idx}`}
      />
    ));
    const dotsNode = <SliderDots count={count} nowLocal={this.state.nowLocal} />;
    return (
      <div className={S.slider}>
        <ul
          style={{
            left: `${-100 * this.state.nowLocal}%`,
            transitionDuration: `${speed}s`,
            width: `${items.length * 100}%`,
            margin: 0,
            padding: 0,
            height: '100%',
          }}
        >
          {itemNodes}
        </ul>
        {dots ? dotsNode : null}
      </div>
    );
  }
}


SliderItem.propTypes = {
  count: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};

SliderDots.propTypes = {
  count: PropTypes.number.isRequired,
  nowLocal: PropTypes.number.isRequired,
};

NewsSlider.propTypes = {
  items: PropTypes.array.isRequired,
  dots: PropTypes.bool.isRequired,
  speed: PropTypes.number.isRequired,
  autoplay: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
};

NewsSlider.defaultProps = {
  speed: 1,
  delay: 5,
  autoplay: true,
  dots: true,
  items: [],
};
NewsSlider.autoPlayFlag = null;


export default NewsSlider;
