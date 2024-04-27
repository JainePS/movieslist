import React from 'react';
import {Path, Svg} from 'react-native-svg';

const MovieIcon = () => {
  return (
    <Svg width="12" height="11" fill="none" viewBox="0 0 12 11">
      <Path
        fill="#414141"
        d="M8.25 9.387V5.825h-4.5V9.387h4.5zm0-4.687V1.137h-4.5V4.7h4.5zM1.5 1.137a.385.385 0 00-.375.375V3.2h1.5V1.137H1.5zm-.375 3.188V6.2h1.5V4.325h-1.5zm1.5 5.062V7.325h-1.5v1.687c0 .211.164.375.375.375h1.125zM9.375 3.2h1.5V1.512a.403.403 0 00-.375-.375H9.375V3.2zm0 1.125V6.2h1.5V4.325h-1.5zm0 3v2.062H10.5a.385.385 0 00.375-.375V7.325h-1.5zM10.5.012c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 01-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h9z"
      />
    </Svg>
  );
};

export default MovieIcon;
