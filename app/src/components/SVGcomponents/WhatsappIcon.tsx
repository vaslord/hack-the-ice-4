import * as React from 'react'
import Svg, { SvgProps, Ellipse, Path } from 'react-native-svg'

function WhatsappIcon(props: SvgProps) {
    return (
        <Svg
            width={49}
            height={48}
            fill="none"
            {...props}
        >
            <Ellipse cx={24.5} cy={24} rx={24.5} ry={24} fill="#1BD741" />
            <Path
                d="M13.475 34.8l1.544-5.367a10.565 10.565 0 01-1.516-5.458c0-5.941 4.94-10.775 11.011-10.775 6.072 0 11.011 4.834 11.011 10.775 0 5.94-4.94 10.774-11.01 10.774-1.893 0-3.745-.474-5.384-1.373L13.475 34.8zm5.945-3.385l.337.202a9.275 9.275 0 004.757 1.304c5.042 0 9.143-4.013 9.143-8.946 0-4.934-4.101-8.947-9.143-8.947-5.041 0-9.143 4.013-9.143 8.947 0 1.719.5 3.388 1.444 4.827l.227.346-.89 3.09 3.268-.823z"
                fill="#fff"
            />
            <Path
                d="M21.421 18.96l-.714-.038a.876.876 0 00-.614.205c-.347.295-.9.864-1.07 1.605-.255 1.106.137 2.46 1.152 3.814 1.015 1.353 2.906 3.52 6.25 4.445 1.077.298 1.924.097 2.578-.313a2.257 2.257 0 001.004-1.432l.114-.522a.36.36 0 00-.207-.404l-2.415-1.09a.375.375 0 00-.448.108l-.948 1.203a.275.275 0 01-.305.088c-.649-.223-2.823-1.114-4.017-3.363a.263.263 0 01.035-.3l.906-1.025a.356.356 0 00.06-.379l-1.04-2.383a.37.37 0 00-.32-.22z"
                fill="#fff"
            />
        </Svg>
    )
}

export default WhatsappIcon
