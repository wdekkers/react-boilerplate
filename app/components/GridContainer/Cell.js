import React from 'react';
import PropTypes from 'prop-types';

export const Cell = props => {
  let classNames = 'cell';
  let styles;

  if (props.sizes) classNames += ` ${props.sizes}`;
  if (props.offsets) classNames += ` ${props.offsets}`;
  if (props.style) styles = props.style;

  if (props.shrink) classNames += ' shrink';

  return (
    <div className={classNames} style={styles}>
      {props.children}
    </div>
  );
};

Cell.propTypes = {
  sizes: PropTypes.string,
  offsets: PropTypes.string,
  style: PropTypes.string,
  shrink: PropTypes.string,
  children: PropTypes.any,
};
