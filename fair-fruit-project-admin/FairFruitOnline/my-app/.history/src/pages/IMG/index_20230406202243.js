import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

export default function SvgComponent(props) {
  
  return (
    <Svg
      width={1078}
      height={1078}
      viewBox="0 0 1078 1078"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H1078V1078H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_1_2" transform="scale(.00093)" />
        </Pattern>
        <Image
          id="image0_1_2"
          width={1078}
          height={1078}
        />
      </Defs>
    </Svg>
  )
}