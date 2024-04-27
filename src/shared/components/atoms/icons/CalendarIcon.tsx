import React from 'react';
import {Path, Svg} from 'react-native-svg';

const CalendarIcon = () => {
  return (
    <Svg width="11" height="13" fill="none" viewBox="0 0 11 13">
      <Path
        fill="#414141"
        d="M3.563.825v.937h3.374V.825c0-.305.235-.563.563-.563a.57.57 0 01.563.563v.937H9c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5H1.5a1.48 1.48 0 01-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h.938V.825c0-.305.234-.563.562-.563a.57.57 0 01.563.563zM1.124 4.762v6c0 .211.164.375.375.375H9a.385.385 0 00.375-.375v-6h-8.25z"
      />
    </Svg>
  );
};

export default CalendarIcon;
