import React from 'react';
import classnames from 'classnames';
import { pickDOMProps } from '../../utils/props';

export default props => (
  <input
    {...pickDOMProps(props)}
    className={classnames([
      props.theme.input,
      props.disabled ? props.theme.disabled : null,
      props.error ? props.theme.errored : null
    ])}
    // ref={input => parent.input}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
  />
);
