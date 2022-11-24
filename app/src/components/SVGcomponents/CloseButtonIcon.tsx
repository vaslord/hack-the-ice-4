import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg'
import {SVGIconProps} from '../../api/types'

/* SVGR has dropped some elements not supported by react-native-svg: filter */

const CloseButtonIcon: React.FC<SVGIconProps> = ({backgroundColor, color}) => {
  return (
    <Svg width={30} height={30} fill="none">
      {/*@ts-ignore*/}
      <G filter="url(#prefix__filter0_b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z"
          fill={backgroundColor || '#F9F9F9'}
          fillOpacity={0.78}
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.625 9.626a1.21 1.21 0 00-1.71 0l-3.992 3.99-3.914-3.914a1.21 1.21 0 00-1.712 1.711l3.915 3.915-3.99 3.99a1.21 1.21 0 101.71 1.712l3.991-3.991 3.915 3.914a1.21 1.21 0 101.71-1.71l-3.914-3.915 3.991-3.991a1.21 1.21 0 000-1.711z"
        fill={color || '#8E8E93'}
      />
      <Defs />
    </Svg>
  )
}

export default CloseButtonIcon
