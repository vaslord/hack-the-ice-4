import * as React from 'react'
import Svg, {Ellipse, Path, G, Defs, ClipPath, Rect} from 'react-native-svg'

const Plus: React.FC<{
  color?: string
}> = props => {
  return (
    <Svg width="40" height="40">
      <G clip-path="url(#clip0_94366_3140)">
        <Path d="M27 21H21V27H19V21H13V19H19V13H21V19H27V21Z" fill="white" />
      </G>
      <Defs>
        <ClipPath id="clip0_94366_3140">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Plus
