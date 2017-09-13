import React from 'react';


import S from './SetSlider.css';


class SetSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArr: [],
      isLoaded: false,
    };
    this.currentSubmitImg = 0;
  }

  componentWillReceiveProps(nextProps) {
    const { setStatus, sliderShow } = nextProps;
    const { imageArr, isLoaded } = this.state;

    // 初次获取数据
    if (!sliderShow.isRequesting && sliderShow.success && !isLoaded) {
      const images = sliderShow.data.map((element, index) => ({ ...element,
        thumbnailUrl: element.imgUrl,
        isShowClose: false, // 是否展示关闭图标
        isShowSuccess: true, // 是否展示成功提交
        isRequesting: false, // 展示是否显示loading
      }));
      this.setState({
        imageArr: images,
        isLoaded: true,
      });
    } else if (!sliderShow.isRequesting && sliderShow.success && isLoaded) {
      if (setStatus.isRequesting) { // 当正在请求
        imageArr[this.currentSubmitImg].isRequesting = true;
        imageArr[this.currentSubmitImg].isShowSuccess = false;
        this.setState({
          imageArr,
        });
      } else if (!setStatus.isRequesting && setStatus.success) {  // 成功了
        imageArr[this.currentSubmitImg].isRequesting = false;
        imageArr[this.currentSubmitImg].isShowSuccess = true;
        this.setState({
          imageArr,
        });
      }
      // 当在请求中时，则将isLoaded置为false，表明没有加载完成
    } else if (sliderShow.isRequesting && !sliderShow.success) {
      this.setState({
        isLoaded: false,
      });
    }
  }

  handleDropEvt = (e) => {
    // 阻止默认事件
    e.stopPropagation();
    e.preventDefault();
    // 文件
    const files = e.dataTransfer.files;
    // 判断文件类型
    const fileType = files[0].type;
    if (fileType !== 'image/png' && fileType !== 'image/jpg' && fileType !== 'image/jpeg'){
      alert("please choose pic");
      return false;
    }
    // 判断文件大小
    const fileSize = Math.floor((files[0].size) / 1024);
    if (fileSize > 512) {
      alert("上传大小不能超过512K.");
      return false;
    }
    // 展示缩略图
    const thumbnailUrl = window.URL.createObjectURL(files[0]); // 获取文件路径
    const imageObj = {
      imgFile: files[0],
      pageLink: '',
      pageTitle: '',
      thumbnailUrl,
      isShowClose: false, // 是否展示关闭图标
      isShowSuccess: false, // 是否展示成功提交
      isRequesting: false, // 展示是否显示loading
    };
    // 添加进图片node数组中
    const { imageArr } = this.state;
    imageArr.push(imageObj);
    // 更新
    this.setState({
      imageArr,
    });
  }


  handleDragEnterEvt = (e) => {
    // 拖拽进来的事件
    e.stopPropagation();
    e.preventDefault();
  }

  handleDragLeaveEvt = (e) => {
    // 拖拽离开的事件
    e.stopPropagation();
    e.preventDefault();
  }

  handleDragOverEvt = (e) => {
    // 鼠标移动的事件
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  handleMouseEnterEvt = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    const { imageArr } = this.state;
    if (imageArr[index].isShowSuccess) {
      return false;
    }
    imageArr[index].isShowClose = true;
    this.setState({
      imageArr,
    });
  }

  handleMouseLeaveEvt = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    const { imageArr } = this.state;
    if (imageArr[index].isShowSuccess) {
      return false;
    }
    imageArr[index].isShowClose = false;
    this.setState({
      imageArr,
    });
  }

  handleCloseImg = (e, index) => {
    // 删除图片
    const { imageArr } = this.state;
    imageArr.splice(index, 1);
    this.setState({
      imageArr,
    });
  }
  handleSubmitImg = (e, index) => {
    // 提交
    e.stopPropagation();
    e.preventDefault();
    const { postHeadline } = this.props;
    const { imageArr } = this.state;
    const image = imageArr[index];
    if (typeof image.pageLink !== 'string' || image.pageLink.trim() === '') {
      return;
    }

    if (typeof image.pageTitle !== 'string' || image.pageTitle.trim() === '') {
      return;
    }
    this.currentSubmitImg = index;
    // 生成表单数据
    const fd = new FormData();
    fd.append('pageLink', image.pageLink);
    fd.append('pageTitle', image.pageTitle);
    fd.append('imgFile', image.imgFile);
    postHeadline(fd);
  }

  handleDeleteImg = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    const { imageArr } = this.state;
    imageArr.splice(index, 1);
    this.setState({
      imageArr,
    });
  }

  handLinkChange = (e, index) => {
    // 链接发生改变
    const { imageArr } = this.state;
    imageArr[index].pageLink = e.target.value;
    this.setState({
      imageArr,
    });
  }

  handTitleChange = (e, index) => {
    const { imageArr } = this.state;
    imageArr[index].pageTitle = e.target.value;
    this.setState({
      imageArr,
    });
  }

  noneClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const { imageArr } = this.state;
    // const { setStatus } = this.props;
    const actionNode = []; // 按钮节点
    const imageNode = imageArr.map((element, index) => {
      actionNode.push(
        <div key={index}>
          <input
            type="text"
            placeholder="链接"
            value={element.pageLink}
            readOnly={element.isShowSuccess}
            style={{
              opacity: `${element.isShowSuccess ? 0.4 : 1}`,
            }}
            onChange={e => this.handLinkChange(e, index)}
          />
          <input
            type="text"
            placeholder="标题"
            value={element.pageTitle}
            readOnly={element.isShowSuccess}
            style={{
              opacity: `${element.isShowSuccess ? 0.4 : 1}`,
            }}
            onChange={e => this.handTitleChange(e, index)}
          />
          <button
            className={S.btnDefault}
            style={{
              opacity: `${(element.isRequesting || element.isShowSuccess) ? 0.4 : 1}`,
            }}
            onClick={e => ((element.isRequesting || element.isShowSuccess) ? this.noneClick(e) : this.handleSubmitImg(e, index))}
          >发布</button>
          <button
            className={S.btnDanger}
            style={{
              opacity: `${(element.isRequesting || element.isShowSuccess) ? 0.4 : 1}`,
            }}
            onClick={e => ((element.isRequesting || element.isShowSuccess) ? this.noneClick(e) : this.handleDeleteImg(e, index))}
          >删除</button>
        </div>
      );
      return (
        <div
          style={{
            top: 0,
            left: `${index * 20}%`,
          }}
          key={index}
          onMouseEnter={e => this.handleMouseEnterEvt(e, index)}
          onMouseLeave={e => this.handleMouseLeaveEvt(e, index)}
        >
          <img className={S.thumbnail} src={element.thumbnailUrl} alt="" />
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
            onClick={e => this.handleCloseImg(e, index)}
          />
          <span
            className={S.successCover}
            style={{
              display: element.isShowSuccess ? 'block' : 'none',
            }}
          />
          <span
            className={S.loading}
            style={{
              display: element.isRequesting ? 'block' : 'none',
            }}
          />
        </div>
      );
    });

    return (
      <div className={S.container}>
        <div className={S.dropcover}>
          <div
            className={S.dropzone}
            onDrop={this.handleDropEvt}
            onDragOver={this.handleDragOverEvt}
            onDragEnter={this.handleDragEnterEvt}
            onDragLeave={this.handleDragLeaveEvt}
          >
            {imageNode}
          </div>
        </div>
        <div className={S.setzone}>
          {actionNode}
        </div>
      </div>
    );
  }
}

export default SetSlider;
