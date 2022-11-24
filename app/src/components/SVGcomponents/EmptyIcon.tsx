import * as React from 'react'
import Svg, {Ellipse} from 'react-native-svg'

const EmptyIcon: React.FC<{
  color: string
}> = props => {
  return (
    <Svg width={24} height={24} {...props}>
      <Ellipse cx={24.5} cy={24} rx={24.5} ry={24} fill="#1BD741" />
    </Svg>
  )
}

export default EmptyIcon
