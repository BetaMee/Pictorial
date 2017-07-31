import React from 'react';
import { Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
// 组件
import FunsList from './FunsList';
import ComponentLoading from '../../Common/CompoentLoading';
import Voice from 'bundle-loader?lazy&name=voice-[name]!../../Voice/view.js';
// 样式
import S from './Funs.css';
// 代码分割
import createModule from '../../../../lib/createModule.js';
import WrapGasket from '../../Common/WrapGasket';

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
          <TransitionGroup>
            <CSSTransition
              classNames={{
                enter: S.slideInRight,
                enterActive: S.slideInRight,
                exit: S.slideOutRight,
                exitActive: S.slideOutRight,
              }}
              key={location.key}
              timeout={10000}
              mountOnEnter
              unmountOnExit
            >
              <Route
                path={`${match.path}/voice/:voiceId`}
                location={location}
                key={location.key}
                component={WrapGasket(createModule(Voice, ComponentLoading))}
              />
            </CSSTransition>
          </TransitionGroup>
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
  location: PropTypes.object.isRequired,
};

export default Funs;
