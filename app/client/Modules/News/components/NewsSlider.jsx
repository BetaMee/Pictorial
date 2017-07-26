import React from 'react';
import PropTypes from 'prop-types';
import S from './NewsSlider.css';

class NewsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 0,
      posY: 0,
    };
  }

  touchMove = (e) => {
    console.log('touchMove');
    console.log(e.touches);
  }

  touchStart = (e) => {
    // console.log('touchStart');
    // console.log(e);
  }

  touchEnd = (e) => {
    // console.log('touchEnd');
    // console.log(e);
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
      <div className={S.container}>
        <div
          style={Styles[0]}
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
        />
      </div>
    );
  }
}

NewsSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default NewsSlider;
