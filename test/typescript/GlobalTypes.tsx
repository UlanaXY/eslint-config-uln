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

interface BProps {
  lanceConcentration: number,
  lanceConcentrationLevel: number,
}

export const B = ({ lanceConcentration, lanceConcentrationLevel }: BProps) => (
  <div>
    <span className="nav" style={{ flexDirection: 'column', width: lanceConcentration > 2 ? lanceConcentrationLevel : 12 }} aria-label="mailbox folders">
      asdasda
    </span>
    <span>
      ggggg
    </span>
  </div>
);

export default SimpleComponent;
