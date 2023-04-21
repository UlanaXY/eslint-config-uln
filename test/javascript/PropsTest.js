// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


const PropsTest = ({
  type = 'button',
  isGrid = false,
  children,
  ...otherProps
}) => (
  <div
    type={type}
    style={{ display: isGrid && 'grid' }}
    {...otherProps}
  >
    <span className="redButtonTitle">
      {children}
    </span>
  </div>
);


PropsTest.propTypes = {
  type: PropTypes.string,
  isGrid: PropTypes.bool,
  children: PropTypes.node.isRequired,
};


export default PropsTest;
