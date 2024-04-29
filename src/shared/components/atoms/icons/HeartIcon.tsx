import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type HeartIconProps = {
  fill?: string;
};

const HeartIcon = ({fill = 'none'}: HeartIconProps) => (
  <Svg width="20" height="20" fill={fill} viewBox="0 0 24 24">
    <Path
      stroke={fill !== 'none' ? fill : '#000'}
      strokeWidth="2"
      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002z"
    />
  </Svg>
);

export default React.memo(HeartIcon);
