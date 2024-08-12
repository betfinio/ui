import {IconProps} from "./";
import {FC} from "react";

const SliderDown: FC<IconProps> = ({className = ''}) => {
  return <svg width="18" height="10" className={className} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 1.25L9 8.75L16.5 1.25" stroke="#FFC800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

export default SliderDown;