import { memo, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Takes an object of selectors and action creators,
 * and returns only the action creators by checking the type property
 * @param {function} prop - action creator or selector
 * @param {string} key - key for model props
 * @returns {boolean} isAction - is action
 */
const isAction = (prop) => prop?.type;

/**
 * Takes an object of selectors and action creators,
 * and returns only the action creators
 *
 * @param {object} props - model props
 * @returns {object} actionProps - action props
 *
 */
const actionProps = (props) =>
  Object.entries(props).reduce((result, [key, value]) => {
    if (isAction(value)) result[key] = value;
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
  Object.entries(props).reduce((result, [key, value]) => {
    if (!isAction(value)) result[key] = value(state, ownProps);
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
    const dispatch = useDispatch();
    // Add 'shallowEqual' to useSelector to prevent unnecessary re-renders of components
    // https://react-redux.js.org/api/hooks#equality-comparisons-and-updates
    const mappedStateProps = useSelector(
      stateProps(props, componentProps),
      shallowEqual,
    );

    // Add 'useMemo' to prevent the bound action creators from being re-created on every render
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

  // This prevents unnecessary re-renders of components in case the parent component re-renders
  return memo(EnhancedComponent);
};
