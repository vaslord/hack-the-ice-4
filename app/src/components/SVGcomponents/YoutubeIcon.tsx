import * as React from 'react'
import Svg, {
    SvgProps,
    Circle,
    G,
    Path,
    Defs,
    ClipPath,
} from 'react-native-svg'

function YoutubeIcon(props: SvgProps) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            {...props}
        >
            <Circle cx={24} cy={24} r={24} fill="red" />
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M34.355 18.815a2.706 2.706 0 00-1.904-1.904C30.761 16.45 24 16.45 24 16.45s-6.761 0-8.451.445a2.761 2.761 0 00-1.904 1.921c-.445 1.69-.445 5.195-.445 5.195s0 3.523.445 5.196c.249.925.978 1.654 1.904 1.904 1.708.462 8.451.462 8.451.462s6.761 0 8.451-.445a2.706 2.706 0 001.904-1.903c.445-1.69.445-5.196.445-5.196s.018-3.523-.445-5.213z"
                    fill="#fff"
                />
                <Path d="M21.847 27.249l5.622-3.238-5.622-3.238v6.476z" fill="red" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path
                        fill="#fff"
                        transform="translate(13.2 13.2)"
                        d="M0 0h21.6v21.6H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default YoutubeIcon
