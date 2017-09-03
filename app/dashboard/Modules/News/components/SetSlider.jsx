import React from 'react';


import S from './SetSlider.css';


class SetSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgaeNodeArr: [],
    };
  }

  handleDropEvt = (e) => {
    // 阻止默认事件
    e.stopPropagation();
    e.preventDefault();
    console.log('Drop');
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
    const imgUrl = window.URL.createObjectURL(files[0]); // 获取文件路径
    const imgNode = `
    <div>
        <img class=${S.thumbnail} src="${imgUrl}" alt="" />
      </div>
    `;
    // 添加进图片node数组中
    const imgaeNodeArr = this.state.imgaeNodeArr;
    imgaeNodeArr.push(imgNode);
    this.setState({
      imgaeNodeArr,
    });
  }


  handleDragEnterEvt = (e) => {
    // 拖拽进来的事件
    e.stopPropagation();
    e.preventDefault();
    console.log('DragEnter');
  }

  handleDragLeaveEvt = (e) => {
    // 拖拽离开的事件
    e.stopPropagation();
    e.preventDefault();
    console.log('DragLeave');
  }

  handleDragOverEvt = (e) => {
    // 鼠标移动的事件
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  render(){
    const { imgaeNodeArr } = this.state;
    let a = null;
    if (imgaeNodeArr.length !== 0 ) {
      a = imgaeNodeArr[0];
    }
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
          {a}
          </div>
        </div>
        <div className={S.setzone}>
            
        </div>
      </div>
    );
  }
}

export default SetSlider;
