import React from 'react';
import {Path, Svg} from 'react-native-svg';

type EmojiIconProps = {
  fill: string;
  stroke: string;
  w: string;
  h: string;
};

const EmojiExplodeIcon = ({
  w = '24',
  h = '24',
  fill,
  stroke,
}: EmojiIconProps) => {
  return (
    <Svg width={w} height={h} fill={fill} viewBox="0 0 24 24">
      <Path fill={fill} d="M12 17a2 2 0 012 2h-4a2 2 0 012-2z" />
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.815 9H16.5a2 2 0 10-1.03-3.707A1.87 1.87 0 0015.5 5 1.992 1.992 0 0012 3.69 1.992 1.992 0 008.5 5c.002.098.012.196.03.293A2 2 0 107.5 9h3.388m2.927-.985v3.604M10.228 9v2.574M15 16h.01M9 16h.01m11.962-4.426a1.805 1.805 0 01-1.74 1.326 1.893 1.893 0 01-1.811-1.326 1.9 1.9 0 01-3.621 0 1.8 1.8 0 01-1.749 1.326 1.98 1.98 0 01-1.87-1.326A1.763 1.763 0 018.46 12.9a2.035 2.035 0 01-1.905-1.326A1.9 1.9 0 014.74 12.9 1.805 1.805 0 013 11.574V12a9 9 0 0018 0l-.028-.426z"
      />
    </Svg>
  );
};

export default EmojiExplodeIcon;
