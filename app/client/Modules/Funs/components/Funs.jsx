import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import FunsList from './FunsList';


const Topic = () => (
  <div>
    <h3>hhhhh</h3>
  </div>
);

class Funs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchFunsData } = this.props;
    fetchFunsData();
  }

  render() {
    const { funs, match, location } = this.props;
    console.log(location);
    const funsItems = funs.data;
    if (!funs.success && !funs.isReq && funs.message !== '') { // 不在请求中，且有错误信息
      return (
        <div>
          fail
        </div>
      );
    }
    if (funs.success) { // 成功则返回列表
      const funsNode = funsItems.map((item, index) => (
        <FunsList
          match={match}
          type={item.type}
          id={item.id}
          src={item.src}
          title={item.title}
          subtitle={item.subtitle}
          key={`funskey-${index}`}
        />
      ));
      return (
        <div>
          {funsNode}

            <Route
              path={`${match.path}/voice/:voiceId`}
              component={Topic}
            />
            <Route
              path={`${match.path}/guess/:guessId`}
              component={Topic}
            />
            <Route
              path={`${match.path}/vote/:voteId`}
              component={Topic}
            />
        </div>
      );
    }
    // 其余情况则返回loading状态
    return (
      <div>
        loading
      </div>
    );
  }
}


Funs.propTypes = {
  fetchFunsData: PropTypes.func.isRequired,
  funs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default Funs;
