import {IconProps} from "./";
import {FC} from "react";
import cx from "clsx";

const WalletConnect: FC<IconProps> = ({className = ''}) => {
	return <svg xmlns="http://www.w3.org/2000/svg" width="942" className={cx(className, 'text-[#5570FF]')} height="570" viewBox="0 0 942 570" fill="none">
		<path
			d="M192.847 111.368C346.466 -37.1227 595.533 -37.1227 749.152 111.368L767.641 129.239C775.322 136.664 775.322 148.701 767.641 156.126L704.396 217.259C700.555 220.972 694.328 220.972 690.488 217.259L665.046 192.666C557.877 89.0756 384.122 89.0756 276.953 192.666L249.707 219.003C245.866 222.716 239.639 222.716 235.799 219.003L172.554 157.87C164.873 150.445 164.873 138.408 172.554 130.983L192.847 111.368ZM879.949 237.799L936.237 292.208C943.918 299.632 943.918 311.67 936.237 319.094L682.43 564.431C674.749 571.856 662.296 571.856 654.615 564.432V564.432L474.478 390.308C472.557 388.452 469.444 388.452 467.524 390.308V390.308L287.391 564.431C279.71 571.856 267.256 571.856 259.575 564.432V564.432L5.76073 319.091C-1.92024 311.667 -1.92024 299.629 5.76073 292.204L62.049 237.795C69.73 230.371 82.1833 230.371 89.8643 237.795L270.004 411.921C271.924 413.777 275.037 413.777 276.958 411.921V411.921L457.088 237.795C464.769 230.371 477.223 230.37 484.904 237.795V237.795L665.043 411.921C666.964 413.777 670.077 413.777 671.997 411.921L852.134 237.799C859.815 230.374 872.268 230.374 879.949 237.799Z"
			fill="currentColor"/>
	</svg>
}

export default WalletConnect;