import React from 'react';

import S from './SetList.css';

class SetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      categoryId: 0, // 文章类别
      pageLink: '', // 文章链接
      pageTitle: '', // 文章标题

      isRequesting: false, // 是否在请求中
      isShowDropMenu: false, // 是否展示下拉菜单
    };
  }

  componentWillReceiveProps(nextProps) {
    const { listShow } = nextProps;
    if (listShow.isRequesting && !listShow.success) { // 请求中
      this.setState({
        isRequesting: true,
      });
    } else if (!listShow.isRequesting && listShow.success) { // 请求成功
      this.setState({
        image: null,
        categoryId: 0, // 文章类别
        pageLink: '', // 文章链接
        pageTitle: '', // 文章标题
        isRequesting: false, // 是否在请求中
      });
    }
  }
  // 图片拖拽处理
  handleDropEvt = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { isRequesting } = this.state;
    if (isRequesting) {
      return;
    }
    // 文件
    const files = e.dataTransfer.files;
    // 判断文件类型
    const fileType = files[0].type;
    if (fileType !== 'image/png' && fileType !== 'image/jpg' && fileType !== 'image/jpeg'){
      alert("please choose pic");
      return;
    }
    // 判断文件大小
    const fileSize = Math.floor((files[0].size) / 1024);
    if (fileSize > 512) {
      alert("上传大小不能超过512K.");
      return;
    }
    // 展示缩略图
    const thumbnailUrl = window.URL.createObjectURL(files[0]); // 获取文件路径
    const imageObj = {
      imgFile: files[0],
      thumbnailUrl,
    };
    // 更新
    this.setState({
      image: imageObj,
    });
  }

  handleDragOverEvt = (e) => {
    // 鼠标移动的事件
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }
  // 输入框处理
  handLinkChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { isRequesting } = this.state;
    if (isRequesting) {
      return;
    }
    this.setState({
      pageLink: e.target.value,
    });
  }
  handTitleChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { isRequesting } = this.state;
    if (isRequesting) {
      return;
    }
    this.setState({
      pageTitle: e.target.value,
    });
  }
  // 下拉菜单事件处理
  handleMenuClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { isRequesting } = this.state;
    if (isRequesting) {
      return;
    }
    this.setState({
      isShowDropMenu: !this.state.isShowDropMenu,
    });
  }
  handleMenuSelected = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const categoryId = e.target.dataset.categoryid;
    this.setState({
      categoryId,
      isShowDropMenu: false,
    });
  }

  handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // 提交
    const {
      image,
      categoryId,
      pageLink,
      pageTitle,
      isRequesting,
    } = this.state;

    const { postNewsLists } = this.props;

    if (image === null) {
      return;
    }

    if (categoryId === 0) {
      return;
    }

    if (typeof pageLink !== 'string' || pageLink.trim() === '') {
      return;
    }

    if (typeof pageTitle !== 'string' || pageTitle.trim() === '') {
      return;
    }

    if (isRequesting) { // 请求中
      return;
    }
    const category = ['美人志', '男神志', '青年观察', 'have a chat', '美食志'][categoryId - 1];
    // 生成表单数据
    const fd = new FormData();
    fd.append('pageLink', pageLink);
    fd.append('pageTitle', pageTitle);
    fd.append('category', category);
    fd.append('imgFile', image.imgFile);
    postNewsLists(fd);
  }

  handleReset = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { isRequesting } = this.state;
    if (isRequesting) {
      return;
    }
    this.setState({
      image: null,
      categoryId: 0, // 文章类别
      pageLink: '', // 文章链接
      pageTitle: '', // 文章标题
      isShowDropMenu: false, // 是否展示下拉菜单
    });
  }
  render() {
    const {
      image,
      categoryId,
      pageLink,
      pageTitle,
      isRequesting,
      isShowDropMenu,
    } = this.state;

    let imageNode;
    if (image !== null) {
      imageNode = (
        <img className={S.thumbnail} src={image.thumbnailUrl} alt="" />
      );
    }
    return (
      <div className={S.container}>
        {/* 拖拽展示区域 */}
        <div className={S.dropcover}>
          <div
            className={S.dropzone}
            onDrop={this.handleDropEvt}
            onDragOver={this.handleDragOverEvt}
          >
            <div>
              {imageNode}
            </div>
          </div>
        </div>
        {/* 设置区域 */}
        <div className={S.setzone}>
          <input
            className={S.input}
            type="text"
            placeholder="文章链接"
            value={pageLink}
            onChange={this.handLinkChange}
            readOnly={isRequesting}
            style={{
              opacity: `${isRequesting ? 0.4 : 1}`,
            }}
          />
          <br />
          <br />
          <input
            className={S.input}
            type="text"
            placeholder="文章标题"
            value={pageTitle}
            onChange={this.handTitleChange}
            readOnly={isRequesting}
            style={{
              opacity: `${isRequesting ? 0.4 : 1}`,
            }}
          />
          <br />
          <br />
          <div className={S.dropdown}>
            <p
              onClick={this.handleMenuClick}
            >
              {['选择类别', '美人志', '男神志', '青年观察', 'have a chat', '美食志'][categoryId]}
            </p>
            <div
              className={S.dropmenu}
              style={{
                display: isShowDropMenu ? 'flex' : 'none',
              }}
              onClick={this.handleMenuSelected}
            >
              <p data-categoryid={1}>美人志</p>
              <p data-categoryid={2}>男神志</p>
              <p data-categoryid={3}>青年观察</p>
              <p data-categoryid={4}>have a chat</p>
              <p data-categoryid={5}>美食志</p>
            </div>
          </div>
          <br />
          <button
            className={S.btnDefault}
            onClick={this.handleSubmit}
            style={{
              opacity: `${isRequesting ? 0.4 : 1}`,
            }}
          >
            提交
          </button>
          <button
            className={S.btnDanger}
            onClick={this.handleReset}
            style={{
              opacity: `${isRequesting ? 0.4 : 1}`,
            }}
          >
            重置
          </button>
        </div>
      </div>
    );
  }
}

export default SetList;
