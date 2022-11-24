import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

const ProfileIcon: React.FC<{
  color: string
}> = props => {
  return (
    <Svg width={24} height={24} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.732 12.606A4.5 4.5 0 017.5 8.72V5.316c0-2.484 2.016-4.5 4.5-4.5s4.5 2.016 4.5 4.5V8.72a4.5 4.5 0 01-2.232 3.886V13.8A6.753 6.753 0 0121 20.55V21a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 21v-.45a6.753 6.753 0 016.732-6.75v-1.194z"
        fill={props.color}
      />
    </Svg>
  )
}

export default ProfileIcon
