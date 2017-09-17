import React from 'react';

import S from './ShowList.css';

class ShowList extends React.Component {
  constructor(props) {
    super(props);
    const colors = new Map(
      [
        ['美人志', '#E91E63'],
        ['男神志', '#2196F3'],
        ['have a chat', '#3F51B5'],
        ['青年观察', '#FF5722'],
        ['美食志', '#009688'],
      ],
    );
    this.state = {
      imageArr: null,
      isRequesting: false,
      colors,
    };
  }

  componentDidMount() {
    //  加载数据
    const { getNewsLists } = this.props;
    getNewsLists();
  }

  componentWillReceiveProps(nextProps) {
    // 更新数据
    const { listShow } = nextProps;
    if (listShow.isRequesting && !listShow.success) { // 请求中
      this.setState({
        isRequesting: true,
      });
    } else if (!listShow.isRequesting && listShow.success) { // 请求成功
      const images = listShow.data.map((element, index) => ({...element, isShowClose: false}));
      this.setState({
        imageArr: images,
        isRequesting: false, // 是否在请求中
      });
    }
  }

  handleDeleImage = (e, objectId) => {
    e.stopPropagation();
    e.preventDefault();
    // 删除图片
    const { deleNewsListsById } = this.props;
    deleNewsListsById(objectId);
  }

  handleMouseMoveEvt = (e, index) => {
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
    const { imageArr, colors } = this.state;
    let imagesNode = null;
    if (imageArr !== null) {
      imagesNode = imageArr.map((element, index) => (
        <div
          key={index}
          onMouseMove={e => this.handleMouseMoveEvt(e, index)}
          onMouseLeave={e => this.handleMouseLeaveEvt(e, index)}
        >
          <img src={element.imgUrl} alt="" />
          <p>
            <span
              style={{
                backgroundColor: colors.get(element.category),
              }}
            >{element.category}</span>{` | ${element.pageTitle}`}
          </p>
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
    }
    return (
      <div className={S.container}>
        {imagesNode}
      </div>
    );
  }
}

export default ShowList;


// <div
// key={index}
// onMouseMove={e => this.handleMouseMoveEvt(e, index)}
// onMouseLeave={e => this.handleMouseLeaveEvt(e, index)}
// >
// <img src='http://ac-kENL4J7p.clouddn.com/4a68b9420386182a4f44.jpg' alt="" />
// <p><span>美人志</span> | 不喜欢旅游的dancer不是好主持不喜欢旅游的dance</p>
// <span
//   className={S.closeCover}
//   style={{
//     display: 'block',
//   }}
// />
// <span
//   style={{
//     display: 'block',
//   }}
//   onClick={e => this.handleDeleImage(e, objectId)}
// />
// </div>

// #E91E63  美人志

// #2196F3  男神志

// #3F51B5 have a chat

// #FF5722 青年观察

// #009688 美食志
