import React from 'react';
import PropTypes from 'prop-types';

export const GridContainer = props => {
  /**
   * Options are full & full-medium. Ships standard with grid-container
   */
  let classNames = props.className ? props.className : '';
  classNames = classNames
    ? (classNames += ' grid-container')
    : 'grid-container';

  if (props.full) classNames += ' full';
  if (props.fullMedium) classNames += 'full-medium';
  return <div className={classNames}>{props.children}</div>;
};

GridContainer.propTypes = {
  className: PropTypes.string,
  full: PropTypes.bool,
  fullMedium: PropTypes.bool,
  children: PropTypes.any,
};
