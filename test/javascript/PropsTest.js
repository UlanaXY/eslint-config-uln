// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


const PropsTest = ({
  type = 'button',
  isGrid = false,
  children,
  ...otherProps
}) => {
  // eslint-disable-next-line no-console
  console.log(isGrid);
  return (
    <div
      type={type}
      {...otherProps}
    >
      <span className="redButtonTitle">
        {children}
      </span>
    </div>
  );
};

PropsTest.propTypes = {
  type: PropTypes.string,
  isGrid: PropTypes.bool,
  children: PropTypes.node.isRequired,
};


export default PropsTest;
