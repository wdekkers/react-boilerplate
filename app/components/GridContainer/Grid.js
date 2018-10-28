import React from 'react';
import PropTypes from 'prop-types';

export const Grid = props => {
  let classNames = props.y ? 'grid-y' : 'grid-x';

  if (props.paddingX) classNames += ' grid-padding-x';
  if (props.paddingY) classNames += ' grid-padding-y';
  if (props.marginX) classNames += ' grid-margin-x';
  if (props.marginY) classNames += ' grid-margin-y';

  return <div className={classNames}>{props.children}</div>;
};

Grid.propTypes = {
  y: PropTypes.bool,
  paddingX: PropTypes.bool,
  paddingY: PropTypes.bool,
  marginX: PropTypes.bool,
  marginY: PropTypes.bool,
  children: PropTypes.any,
};
