import React from 'react';
import classnames from 'classnames';
import { pickDOMProps } from '../../utils/props';

export default props => (
  <span
    {...pickDOMProps(props)}
    className={classnames([props.className, props.theme.root])}
  >
    {props.tip}
    {props.render(props)}
  </span>
);
