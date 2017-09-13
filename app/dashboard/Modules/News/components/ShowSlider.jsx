import React from 'react';

import S from './ShowSlider.css';

// 判断是否为唯一
const isSetStatusInState = (source, id) => {
  let flag = false;
  for (let i = 0; i < source.length; i++) {
    if (source[i].objectId === id) {
      flag = true;
      break;
    }
  }
  return flag;
};

class ShowSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArr: [],
      isLoaded: false, // 判断是否初次加载过了
    };
  }

  componentDidMount() {
    // 调用接口
    const { getHeadline } = this.props;
    getHeadline();
  }

  componentWillReceiveProps(nextProps) {
    const { sliderShow, setStatus } = nextProps;
    const { isLoaded, imageArr } = this.state;
    // 初次通过getHeadline()获取数据
    if (!sliderShow.isRequesting && sliderShow.success && !isLoaded) {
      const images = sliderShow.data.map((element, index) => ({ ...element, isShowClose: false }));
      this.setState({
        imageArr: images,
        isLoaded: true,
      });
    // 已通过getHeadline()获取数据
    } else if (!sliderShow.isRequesting && sliderShow.success && isLoaded) {
      // 当setStatus里有数据时并且是独一无二的
      if (!setStatus.isRequesting && setStatus.success && !isSetStatusInState(imageArr, setStatus.data.objectId)) {
        const image = { ...setStatus.data, isShowClose: false };
        imageArr.push(image);
        this.setState({
          imageArr,
        });
      }
    }
  }

  handleDeleImage = (e, objectId) => {
    e.stopPropagation();
    e.preventDefault();
    // 删除图片
    const { deleHeadlineById } = this.props;
    this.setState({ isLoaded: false }, () => void deleHeadlineById(objectId));
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
          onClick={e => this.handleDeleImage(e, element.objectId)}
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
