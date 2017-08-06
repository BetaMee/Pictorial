import React from 'react';
import { Transition } from 'react-transition-group';
import { Route } from 'react-router-dom';

const duration = 800;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};


const FadeTransition = ({ children, path, component:Component }) => (
  <Route
    path={path}
    children={({ match, ...rest }) => (
      <Transition
        in={match !== null} // 判断是否发生匹配
        timeout={{
          enter: duration,
          exit: duration,
        }}
      >
        {state => (
          <div style={Object.assign({}, defaultStyle, transitionStyles[state])}>
            { state === 'exited' ? null : <Component match={match} {...rest} />}
          </div>
        )}
      </Transition>
    )}
  />
);

export default FadeTransition;
