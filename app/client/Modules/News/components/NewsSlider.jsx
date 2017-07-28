import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import S from './NewsSlider.css';

class NewsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPosX: 0, // 开始距离
      endPosX: 0, // 终点距离
      distance: 0, // 移动距离
      containerWith: 0, // 容器元素宽度

      SliderToRight: false,
      SliderToLeft: false,
    };
  }

  componentDidMount() {
    console.log(this.div.clientWidth);
    this.setState({
      containerWith: this.div.clientWidth,
    });
  }

  touchMove = (e) => {
     // 判断默认行为是否可以被禁用
    if (e.cancelable) {
      // 判断默认行为是否已经被禁用
      if (!e.defaultPrevented) {
        e.preventDefault();
      }
    }
    const targetTouch = e.targetTouches[0];
    const endPosX = targetTouch.clientX;
    this.setState({
      endPosX: endPosX,
      distance: endPosX - this.state.startPosX,
    });
  } 

  touchStart = (e) => {
    const targetTouch = e.targetTouches[0];
    this.setState({
      SliderToRight: false,
      startPosX: targetTouch.clientX,
    });
  }

  touchEnd = (e) => {
    if (this.state.distance < 0 && Math.abs(this.state.distance ) < 0.5 * this.state.containerWith) {
      this.setState({
        SliderToRight: true,
      }); 
    }
  }

  render() {
    const { images } = this.props;
    const Styles = [
      {
        position: 'absolute',
        backgroundImage: `url(${images[0]})`,
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        left: `${this.state.distance}px`,
        index: 99,
      },
      {
        display: 'none',
        position: 'absolute',
        backgroundImage: `url(${images[1]})`,
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      },
      {
        display: 'none',
        position: 'absolute',
        backgroundImage: `url(${images[2]})`,
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      },
    ];

    return (
      <div
        className={S.container}
        ref={(div) => { this.div = div; }}
      >
        <div
          style={Styles[0]}
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
          className={this.state.SliderToRight ? S.SliderToRight : ''}
        />
      </div>
    );
  }
}

NewsSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default NewsSlider;
