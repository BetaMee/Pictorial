import React from 'react';
import PropTypes from 'prop-types';
import S from './NewsList.css';

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isImgLoaded: false,
    };
  }

  loadImg = () => {
    this.setState({
      isImgLoaded: true,
    });
  }

  render() {
    const { img, title, tags, link } = this.props;
    return (
      <div className={S.container}>
        <a href={link}>
          <div className={S.description}>
            <p>{title}</p>
            <p>{tags}</p>
          </div>
          <div className={S.image}>
            <img src={img} alt="hhh" onLoad={this.loadImg} />
            <div className={this.state.isImgLoaded ? S.imgHidden : S.imgShow} />
          </div>
        </a>
      </div>
    );
  }
}

NewsList.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsList;
