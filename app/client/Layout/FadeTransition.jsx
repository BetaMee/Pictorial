import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 30000;

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

// const WrapFadeTransition = ({ children, in: inProp }) => (
//   <Transition
//     in={inProp}
//     timeout={{
//       enter: duration,
//       exit: duration,
//     }}
//   >
//     {(state) => {
//       console.log(inProp);
//       if (state === 'exited') {
//         return null;
//       }
//       const currentStyles = transitionStyles[state];
//       return React.cloneElement(children, {
//         style: Object.assign({}, defaultStyle, currentStyles),
//       });
//     }}
//   </Transition>
// );

// export default FadeTransition;


const WrapFadeTransition = WrapComponent => ({ children, in: inProp }) => (
  <Transition
    in={inProp}
    timeout={{
      enter: duration,
      exit: duration,
    }}
  >
    {(state) => {
      console.log(inProp);
      if (state === 'exited') {
        return null;
      }
      const currentStyles = transitionStyles[state];
      return <WrapComponent style={Object.assign({}, defaultStyle, currentStyles)} />;
    }}
  </Transition>
);

export default WrapFadeTransition;

