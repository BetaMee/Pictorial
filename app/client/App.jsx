import React from 'react';
import ReactDOM from 'react-dom';


const Root = () => <div>Hello World</div>;

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById('app'));

