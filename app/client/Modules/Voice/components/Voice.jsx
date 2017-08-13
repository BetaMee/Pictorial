import React from 'react';


class Voice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }

  render() {
    return (
      <div style={{height:'1200px'}}>
        gfdglkfdgk
      </div>
    );
  }
}

export default Voice;
