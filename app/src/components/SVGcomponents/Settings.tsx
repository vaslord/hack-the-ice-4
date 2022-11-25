import * as React from 'react'
import Svg, {Ellipse, Path} from 'react-native-svg'

const Settings: React.FC<{
  color?: string
}> = props => {
  return (
    <Svg width="20" height="20" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99985 1.66669C9.78543 1.66669 9.57187 1.67419 9.36088 1.68919C9.10615 1.70752 8.83598 1.92335 8.78023 2.29752L8.69875 2.84169C8.55895 3.77835 7.89768 4.47419 7.16265 4.85752C7.05201 4.91502 6.94394 4.97669 6.83759 5.04002C6.12743 5.46919 5.17627 5.67752 4.27141 5.32669L3.7448 5.12252C3.38286 4.98252 3.05608 5.10085 2.91113 5.30669C2.67184 5.64752 2.45742 6.00669 2.27131 6.38252C2.15981 6.60585 2.21727 6.93919 2.52261 7.17335L2.97117 7.51752C3.73451 8.10252 4.02526 9.00502 3.99867 9.81585L3.9961 10L3.99867 10.1842C4.02526 10.995 3.73451 11.8975 2.97117 12.4825L2.52261 12.8267C2.21727 13.0609 2.15981 13.3942 2.27131 13.6175C2.45742 13.9934 2.67184 14.3525 2.91113 14.6934C3.05608 14.8992 3.38286 15.0175 3.7448 14.8775L4.27141 14.6734C5.17627 14.3225 6.12743 14.5317 6.83759 14.96C6.94394 15.0234 7.05201 15.085 7.16265 15.1425C7.89768 15.5259 8.55895 16.2217 8.69875 17.1584L8.78023 17.7025C8.83598 18.0767 9.10615 18.2925 9.36088 18.3109C9.57187 18.3259 9.78543 18.3334 9.99985 18.3334C10.2143 18.3334 10.4278 18.3259 10.6388 18.3109C10.8944 18.2925 11.1637 18.0767 11.2195 17.7025L11.301 17.1584C11.4408 16.2217 12.102 15.5259 12.8371 15.1425C12.9477 15.085 13.0558 15.0234 13.163 14.96C13.8723 14.5317 14.8234 14.3225 15.7283 14.6734L16.2549 14.8775C16.6168 15.0175 16.9436 14.8992 17.0886 14.6934C17.3279 14.3525 17.5423 13.9925 17.7284 13.6175C17.8399 13.3942 17.7824 13.0609 17.4771 12.8267L17.0285 12.4825C16.2652 11.8975 15.9744 10.995 16.001 10.1842L16.0036 10L16.001 9.81585C15.9744 9.00502 16.2652 8.10252 17.0285 7.51752L17.4771 7.17335C17.7824 6.93919 17.8399 6.60585 17.7284 6.38252C17.5423 6.00752 17.3279 5.64752 17.0886 5.30669C16.9436 5.10085 16.6168 4.98252 16.2549 5.12252L15.7283 5.32669C14.8234 5.67752 13.8723 5.46919 13.163 5.04002C13.0558 4.97669 12.9477 4.91502 12.8371 4.85752C12.102 4.47419 11.4408 3.77835 11.301 2.84169L11.2195 2.29752C11.1637 1.92335 10.8944 1.70752 10.6388 1.68919C10.4278 1.67419 10.2143 1.66669 9.99985 1.66669ZM9.23566 0.0275C9.48782 0.00916667 9.74255 0 9.99985 0C10.2572 0 10.5119 0.00916667 10.764 0.0275C11.9519 0.111667 12.765 1.04167 12.9168 2.05833L12.9983 2.6025C13.0412 2.88917 13.2625 3.1875 13.6484 3.38917C13.7908 3.46333 13.9306 3.54167 14.067 3.625C14.4392 3.84917 14.8157 3.88583 15.0928 3.77833L15.6202 3.57417C16.6006 3.19417 17.8339 3.41333 18.5046 4.36667C18.7919 4.77583 19.0501 5.2075 19.2739 5.6575C19.7911 6.69917 19.3683 7.8475 18.5389 8.4825L18.0912 8.82583C17.8571 9.005 17.7018 9.34 17.7155 9.76417C17.7181 9.8425 17.719 9.92083 17.719 10C17.719 10.0792 17.7181 10.1575 17.7155 10.2358C17.7018 10.66 17.8571 10.995 18.0912 11.1742L18.5389 11.5175C19.3683 12.1525 19.7911 13.3008 19.2739 14.3425C19.0501 14.7925 18.7919 15.2242 18.5046 15.6333C17.8339 16.5867 16.6006 16.8058 15.6202 16.4258L15.0928 16.2217C14.8157 16.1142 14.4392 16.1508 14.067 16.375C13.9306 16.4583 13.7908 16.5367 13.6484 16.6108C13.2625 16.8125 13.0412 17.1108 12.9983 17.3975L12.9168 17.9417C12.765 18.9583 11.9519 19.8883 10.764 19.9725C10.5119 19.9908 10.2572 20 9.99985 20C9.74255 20 9.48782 19.9908 9.23566 19.9725C8.04863 19.8883 7.2347 18.9583 7.08289 17.9417L7.00141 17.3975C6.95852 17.1108 6.73724 16.8125 6.35129 16.6108C6.20891 16.5367 6.06911 16.4583 5.93274 16.375C5.56051 16.1508 5.18399 16.1142 4.90696 16.2217L4.37948 16.4258C3.39916 16.8058 2.16581 16.5867 1.49511 15.6333C1.20779 15.2242 0.949624 14.7925 0.726628 14.3425C0.20859 13.3008 0.631425 12.1525 1.4608 11.5175L1.90851 11.1742C2.14266 10.995 2.2979 10.66 2.28417 10.2358C2.2816 10.1575 2.28074 10.0792 2.28074 10C2.28074 9.92083 2.2816 9.8425 2.28417 9.76417C2.2979 9.34 2.14266 9.005 1.90851 8.82583L1.4608 8.4825C0.631425 7.8475 0.20859 6.69917 0.726628 5.6575C0.949624 5.2075 1.20779 4.77583 1.49511 4.36667C2.16581 3.41333 3.39916 3.19417 4.37948 3.57417L4.90696 3.77833C5.18399 3.88583 5.56051 3.84917 5.93274 3.625C6.06911 3.54167 6.20891 3.46333 6.35129 3.38917C6.73724 3.1875 6.95852 2.88917 7.00141 2.6025L7.08289 2.05833C7.2347 1.04167 8.04863 0.111667 9.23566 0.0275ZM9.99985 7.5C8.57868 7.5 7.42682 8.61917 7.42682 10C7.42682 11.3808 8.57868 12.5 9.99985 12.5C11.421 12.5 12.5729 11.3808 12.5729 10C12.5729 8.61917 11.421 7.5 9.99985 7.5ZM5.71146 9.99998C5.71146 7.69915 7.63094 5.83331 9.99985 5.83331C12.3679 5.83331 14.2882 7.69915 14.2882 9.99998C14.2882 12.3008 12.3679 14.1666 9.99985 14.1666C7.63094 14.1666 5.71146 12.3008 5.71146 9.99998Z"
        fill="#185AC5"
      />
    </Svg>
  )
}

export default Settings
