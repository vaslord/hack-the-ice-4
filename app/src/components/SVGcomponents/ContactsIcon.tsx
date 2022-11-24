import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

const ContactsIcon: React.FC<{
  color: string
}> = props => {
  return (
    <Svg width={24} height={24} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 10.537V10.5C1.5 4.705 6.205 0 12 0c5.794 0 10.5 4.705 10.5 10.5v.037c-.024 7.847-7.575 12.53-9.961 13.364-.16.055-.35.099-.539.099-.189 0-.37-.036-.539-.099-2.386-.834-9.937-5.517-9.961-13.364zM12 6c2.484 0 4.5 2.016 4.5 4.5S14.484 15 12 15a4.502 4.502 0 01-4.5-4.5C7.5 8.016 9.516 6 12 6z"
        fill={props.color}
      />
    </Svg>
  )
}

export default ContactsIcon
