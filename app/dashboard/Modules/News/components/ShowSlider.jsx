import React from 'react';

import S from './ShowSlider.css';

class ShowSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArr: [],
    };
  }

  componentDidMount() {
    // 调用接口
    const { getHeadline } = this.props;
    getHeadline();
  }

  componentWillReceiveProps(nextProps) {
    const { sliderShow } = nextProps;

    if (!sliderShow.isRequesting && sliderShow.success) {
      const imageArr = sliderShow.data.map((element, index) => Object.assign({}, element, {
        isShowClose: false, // 是否展示关闭图标
      }));
      this.setState({
        imageArr,
      });
    }
  }

  handleDeleImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
  }

  handleMouseEnterEvt = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    const { imageArr } = this.state;

    imageArr[index].isShowClose = true;
    this.setState({
      imageArr,
    });
  }

  handleMouseLeaveEvt = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    const { imageArr } = this.state;

    imageArr[index].isShowClose = false;
    this.setState({
      imageArr,
    });
  }

  render() {
    const { imageArr } = this.state;
    console.log('render');
    // const { sliderShow } = this.props;
    const imageNodes = imageArr.map((element, index) => (
      <div
        key={index}
        onMouseEnter={e => this.handleMouseEnterEvt(e, index)}
        onMouseLeave={e => this.handleMouseLeaveEvt(e, index)}
      >
        <img src={element.imgUrl} alt="" />
        <span
          className={S.closeCover}
          style={{
            display: element.isShowClose ? 'block' : 'none',
          }}
        />
        <span
          style={{
            display: element.isShowClose ? 'block' : 'none',
          }}
          onClick={e => this.handleDeleImage(e)}
        />
      </div>
    ));

    return (
      <div className={S.container}>
        {imageNodes}
      </div>
    );
  }
}


export default ShowSlider;
