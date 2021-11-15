// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


PropsTest.propTypes = {
  type: PropTypes.string,
  isGrid: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const PropsTest = ({
  type = 'button',
  isGrid = false,
  children,
  ...otherProps
}) => {
  const data = 'ff';

  return (
    <div
      backgroundimage={data.redButtonSvg.publicURL}
      type={type}
      isGrid={isGrid}
      {...otherProps}
    >
      <span className="redButtonTitle">
        {children}
      </span>
    </div>
  );
};


export default PropsTest;
