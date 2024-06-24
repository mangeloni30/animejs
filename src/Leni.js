import React from 'react';
import { ReactComponent as LeniSvg } from './svg/leni.svg';

const Leni = () => {
  return (
    <div>
      {/* Use the imported SVG as a component */}
      <LeniSvg />
    </div>
  );
}

export default Leni;
