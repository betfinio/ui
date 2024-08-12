import {IconProps} from "./";
import {FC} from "react";

const Affiliate: FC<IconProps> = ({className = ''}) => {
	return <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24"
	            fill="none">
		<g clipPath="url(#clip0_540_6898)">
			<path
				d="M17.775 0.0703068C15.7547 0.435932 14.1937 1.81406 13.5797 3.77343C13.3641 4.46249 13.3219 5.14218 13.4203 6.29999C13.4297 6.43124 13.3969 6.44999 11.4141 7.47656L9.39844 8.52187L9.07031 8.20781C8.29687 7.46249 7.4625 7.01249 6.46875 6.79687C5.25 6.52968 4.06406 6.67968 2.92969 7.24218C2.31094 7.54687 1.92187 7.83281 1.43906 8.34374C0.829687 8.98124 0.398437 9.74062 0.154687 10.6219C0.0328125 11.0578 0.0234375 11.1469 0.0234375 12C0.0234375 12.8578 0.0328125 12.9422 0.154687 13.3781C0.407812 14.2922 0.825 15.0234 1.49062 15.7125C2.89687 17.1703 4.98281 17.6953 6.9375 17.0859C7.71094 16.8422 8.4375 16.4016 9.07031 15.7969L9.39844 15.4781L11.4141 16.5234L13.4297 17.5687L13.4062 17.7984C13.3922 17.9203 13.3875 18.3703 13.3875 18.7969C13.3922 19.4672 13.4109 19.6312 13.5141 20.0297C13.9031 21.4969 14.9062 22.7484 16.2469 23.4375C16.6922 23.6672 17.3344 23.8781 17.8219 23.9531C18.3656 24.0422 19.5141 23.9906 20.0156 23.8594C21.6328 23.4328 23.0109 22.2375 23.6109 20.7422C23.8875 20.0484 23.9625 19.6875 23.9859 18.8812C24.0234 17.8125 23.8781 17.1281 23.4328 16.2562C21.9797 13.425 18.4359 12.4922 15.7359 14.2312C15.3422 14.4891 14.6953 15.1031 14.3859 15.525C14.2547 15.6984 14.1328 15.8437 14.1187 15.8391C14.1 15.8391 13.2422 15.3984 12.2109 14.8641C10.9125 14.1891 10.3406 13.8703 10.3547 13.8234C10.3594 13.7859 10.425 13.5562 10.4906 13.3125C10.5984 12.9094 10.6125 12.7875 10.6125 12C10.6125 11.2125 10.5984 11.0906 10.4906 10.6875C10.425 10.4437 10.3594 10.2141 10.3547 10.1766C10.3406 10.1344 10.95 9.79218 12.2109 9.13593C13.2422 8.60156 14.1 8.16093 14.1141 8.16093C14.1281 8.15624 14.25 8.29687 14.3812 8.47499C14.8828 9.15468 15.5437 9.70781 16.2891 10.0781C17.9953 10.9219 20.0016 10.8094 21.5812 9.77812C24.0516 8.17031 24.7406 4.84218 23.1141 2.38124C22.1109 0.871868 20.4562 -0.00938034 18.6375 0.00468063C18.3516 0.00468063 17.9625 0.0374947 17.775 0.0703068ZM19.2937 1.98749C20.2547 2.42812 20.4844 3.70312 19.7344 4.45312C19.1531 5.03437 18.2391 5.05312 17.6109 4.50468C17.5172 4.42031 17.3719 4.20937 17.2875 4.04062C16.9969 3.44999 17.1094 2.76562 17.5734 2.30156C18.0375 1.83749 18.7031 1.71562 19.2937 1.98749ZM20.6016 5.59687C20.8547 5.70468 21.0375 5.88749 21.1547 6.13593C21.225 6.29999 21.2437 6.44531 21.2437 6.81562C21.2437 7.40156 21.1828 7.64062 20.9672 7.87968C20.6016 8.28281 20.2172 8.36718 18.7031 8.36249C16.9266 8.36249 16.5141 8.23593 16.2234 7.59374C16.1437 7.42031 16.125 7.28437 16.125 6.85312C16.125 6.27187 16.1766 6.07499 16.3969 5.84531C16.7016 5.52187 16.9969 5.48437 19.0312 5.50781C20.1937 5.51718 20.4422 5.53124 20.6016 5.59687ZM5.94375 8.69062C6.25781 8.84999 6.51562 9.10781 6.66094 9.40312C6.75469 9.59531 6.77344 9.70312 6.77344 10.0781C6.77344 10.4812 6.75937 10.5469 6.6375 10.7719C6.02344 11.8828 4.48125 11.8547 3.90937 10.725C3.72656 10.3687 3.70312 9.91874 3.84844 9.53906C3.98906 9.15937 4.33594 8.80312 4.71094 8.64374C5.09062 8.48437 5.57812 8.50312 5.94375 8.69062ZM7.275 12.3C7.51406 12.4172 7.72031 12.6328 7.80937 12.8719C7.92656 13.1812 7.88906 14.0578 7.73906 14.3578C7.60781 14.6297 7.34531 14.8359 7.0125 14.9297C6.25781 15.1406 3.98906 15.1125 3.44531 14.8875C3.21562 14.7891 2.97187 14.55 2.85937 14.3062C2.76562 14.1187 2.75156 14.0062 2.75156 13.5469C2.74687 12.8344 2.87344 12.5391 3.25781 12.3422C3.49687 12.2156 3.825 12.1969 5.48437 12.2016C6.95156 12.2109 7.11562 12.2203 7.275 12.3ZM19.2891 15.3703C19.875 15.6469 20.2547 16.2984 20.1797 16.8984C20.1141 17.4281 19.7437 17.9391 19.2703 18.1594C18.9656 18.3 18.3469 18.3 18.0375 18.1547C17.7281 18.0141 17.4281 17.7187 17.2734 17.4047C17.1562 17.175 17.1375 17.0766 17.1328 16.7578C17.1328 16.2797 17.2781 15.9562 17.6437 15.6234C17.9578 15.3375 18.2062 15.2437 18.6562 15.2391C18.9516 15.2344 19.0547 15.2578 19.2891 15.3703ZM20.4937 18.9422C20.7703 19.0031 21.0562 19.2469 21.1687 19.5094C21.2297 19.6641 21.2484 19.8375 21.2484 20.2406C21.2484 20.7281 21.2391 20.7891 21.1125 21.0375C20.9391 21.375 20.6578 21.5766 20.2406 21.6562C19.8047 21.7406 18.1922 21.7734 17.5875 21.7078C16.9312 21.6375 16.6969 21.5578 16.4578 21.3187C16.1812 21.0328 16.1156 20.7937 16.1344 20.1141C16.1484 19.5797 16.1531 19.5469 16.2891 19.35C16.3687 19.2375 16.5281 19.0969 16.6406 19.0312C16.8328 18.9234 16.9219 18.9094 17.5781 18.8859C18.5156 18.8484 20.2125 18.8812 20.4937 18.9422Z"
				fill="currentColor"/>
		</g>
		<defs>
			<clipPath id="clip0_540_6898">
				<rect width="24" height="24" fill="currentColor"/>
			</clipPath>
		</defs>
	</svg>
}

export default Affiliate;