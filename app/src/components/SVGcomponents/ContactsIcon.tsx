import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

const ContactsIcon: React.FC<{
  color: string
}> = props => {
  return (
    <Svg width={28} height={28} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5098 7.25783L11.9902 4.09125V20.7426L17.5098 23.9091V7.25783Z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3098 23.9465L26.75 19.678V3.44441C26.75 3.25773 26.552 3.14028 26.392 3.23206L19.3098 7.29517V23.9465Z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 8.32241L10.1902 4.05391V20.7052L3.108 24.7683C2.94801 24.8601 2.75 24.7427 2.75 24.556V8.32241Z"
        fill={props.color}
      />
    </Svg>
  )
}

export default ContactsIcon
