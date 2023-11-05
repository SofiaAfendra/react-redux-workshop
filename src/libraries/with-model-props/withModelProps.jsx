import { useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Negates a function
 * @param {function} fn - function
 * @returns {function} negate - negate function
 */
const negate =
  (fn) =>
  (...args) =>
    !fn(...args);

/**
 * Takes an object of selectors and action creators,
 * and returns only the action creators by checking the type property
 * @param {object} propCreators - model props
 * @param {string} key - key for model props
 * @returns {boolean} isAction - is action
 */
const isAction = (propCreators) => (key) => propCreators[key]?.type;

/**
 * Takes an object of selectors and action creators,
 * and returns only the action creators
 *
 * @param {object} props - model props
 * @returns {object} actionProps - action props
 *
 */
const actionProps = (props) =>
  Object.keys(props)
    .filter(isAction(props))
    .reduce((result, key) => {
      result[key] = props[key];
      return result;
    }, {});

/**
 * Takes an object of selectors and action creators,
 * and returns only the selectors.
 *
 * @param {object} props - model props
 * @param {object} ownProps - own props
 * @param {object} state - state
 *
 * @returns {function} stateProps - state props
 *
 */
const stateProps = (props, ownProps) => (state) =>
  Object.keys(props)
    .filter(negate(isAction(props)))
    .reduce((result, key) => {
      result[key] = props[key](state, ownProps);
      return result;
    }, {});

/**
 * Add model props to component
 * @param {object} props - model props
 * @param {object} WrappedComponent - component
 * @returns {function} EnhancedComponent - component with model props
 *
 * @example
 * import React from 'react';
 * import { withModelProps } from '../../utils';
 *
 * const Component = ({ modelProp }) => <div>{modelProp}</div>;
 *
 * export default withModelProps({
 *  modelProp: (state) => state.modelProp,
 * })(Component);
 *
 */
export const withModelProps = (props) => (WrappedComponent) => {
  const EnhancedComponent = (componentProps) => {
    // Add 'shallowEqual' to useSelector to prevent unnecessary re-renders of components
    // https://react-redux.js.org/api/hooks#equality-comparisons-and-updates
    const mappedStateProps = useSelector(
      stateProps(props, componentProps),
      shallowEqual,
    );

    const dispatch = useDispatch();

    // Add 'useMemo' to prevent unnecessary re-renders of components
    // https://redux.js.org/api/bindactioncreators
    const boundActionProps = useMemo(
      () => bindActionCreators(actionProps(props), dispatch),
      [dispatch],
    );

    return (
      <WrappedComponent
        {...componentProps}
        {...mappedStateProps}
        {...boundActionProps}
      />
    );
  };

  return EnhancedComponent;
};
