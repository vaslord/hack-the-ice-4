import * as React from 'react'
import Svg, {Path, G, Rect, ClipPath, Defs} from 'react-native-svg'

const ProfileIcon: React.FC<{
  color: string
}> = props => {
  return (
    <Svg width={28} height={28} {...props}>
      <G fillRule="evenodd" clipRule="evenodd">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2499 2.3335C7.80992 2.3335 2.58325 7.56016 2.58325 14.0002C2.58325 20.4402 7.80992 25.6668 14.2499 25.6668C20.6899 25.6668 25.9166 20.4402 25.9166 14.0002C25.9166 7.56016 20.6899 2.3335 14.2499 2.3335ZM14.2499 5.8335C16.1866 5.8335 17.7499 7.39683 17.7499 9.3335C17.7499 11.2702 16.1866 12.8335 14.2499 12.8335C12.3133 12.8335 10.7499 11.2702 10.7499 9.3335C10.7499 7.39683 12.3133 5.8335 14.2499 5.8335ZM14.2499 22.4002C11.3333 22.4002 8.75492 20.9068 7.24992 18.6435C7.28492 16.3218 11.9166 15.0502 14.2499 15.0502C16.5716 15.0502 21.2149 16.3218 21.2499 18.6435C19.7449 20.9068 17.1666 22.4002 14.2499 22.4002Z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_94320_3725">
          <Rect
            width="28"
            height="28"
            fill="white"
            transform="translate(0.25)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ProfileIcon
