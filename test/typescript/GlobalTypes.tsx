// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';


interface SimpleComponentProps {
  point: Point,
  cords: Coordinates,
}

const SimpleComponent = ({ point, cords }: SimpleComponentProps) => (
  <div>
    <span>
      {point}
    </span>
    <span>
      {cords}
    </span>
  </div>
);

export default SimpleComponent;
