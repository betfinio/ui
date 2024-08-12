import {FC} from "react";
import {IconProps} from "./";

const PeopleSmall: FC<IconProps> = ({className}) => {
    return <svg width="30" height="27" viewBox="0 0 30 27" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.85169 3.76101C8.09894 3.85899 7.30223 4.20738 6.68136 4.71363C5.51103 5.66625 4.92861 7.22855 5.18685 8.70375C5.44509 10.1681 6.4341 11.4037 7.78575 11.9481C7.96158 12.0189 8.10443 12.0733 8.10993 12.0679C8.12092 12.0624 8.07147 11.861 8.01103 11.6215C7.85169 10.9737 7.81322 9.71081 7.9396 8.97593C8.18685 7.48984 8.89015 6.15617 9.97806 5.10556C10.2198 4.87694 10.6044 4.55577 10.8407 4.38702L11.2693 4.08762L10.8352 3.95153C10.3956 3.81544 9.68685 3.69569 9.37916 3.70657C9.28026 3.71202 9.04399 3.73379 8.85169 3.76101Z" fill="currentColor"/>
        <path d="M19.7527 3.75579C19.5714 3.783 19.2198 3.8701 18.967 3.94631L18.511 4.08784L18.9615 4.40357C20.5 5.49228 21.533 7.13623 21.8407 8.97615C21.9945 9.86889 21.9176 11.1917 21.6703 11.9864C21.6429 12.0735 21.6593 12.0735 21.8681 12.0028C22.8462 11.6598 23.7198 10.8651 24.2033 9.87978C24.5385 9.19389 24.6374 8.75841 24.6374 8.00175C24.6374 7.23421 24.533 6.78784 24.2033 6.12373C23.6538 5.01325 22.7363 4.24571 21.533 3.89732C21 3.7449 20.2363 3.68502 19.7527 3.75579Z" fill="currentColor"/>
        <path d="M13.8461 4.98589C12.4725 5.27439 11.2912 6.06915 10.5165 7.22318C9.60987 8.5623 9.40108 10.2825 9.94504 11.8339C10.3242 12.9171 11.1868 13.9677 12.1868 14.5448C13.1428 15.0946 13.7857 15.2687 14.9176 15.2633C15.8242 15.2579 16.2253 15.1817 16.9725 14.8659C19.5494 13.7827 20.8132 10.7724 19.7747 8.18125C19.5 7.48992 19.1868 7.03266 18.5714 6.42298C17.7747 5.63367 17.0055 5.21451 15.9725 5.00222C15.3681 4.88246 14.3791 4.87157 13.8461 4.98589Z" fill="currentColor"/>
        <path d="M5.90661 13.3801C4.9121 13.674 4.04947 14.398 3.60441 15.3016C3.28573 15.9658 3.18683 16.4502 3.18683 17.4029C3.18683 18.4861 3.36815 19.1121 3.80221 19.5422C4.10441 19.847 4.34617 19.9232 5.00551 19.9232H5.58793L5.70331 19.466C5.98353 18.3228 6.49452 17.4192 7.33518 16.5754C8.05496 15.846 8.65936 15.4486 9.63738 15.0567L9.84617 14.9696L9.57694 14.6593C9.42859 14.4851 9.25276 14.2674 9.18683 14.1748C9.08793 14.0333 9.02199 14.0006 8.78023 13.9734C8.43408 13.9299 7.86815 13.7448 7.35166 13.5053C6.88463 13.2821 6.38463 13.2385 5.90661 13.3801Z" fill="currentColor"/>
        <path d="M22.8408 13.3418C22.7309 13.3691 22.5056 13.4562 22.3463 13.5324C21.9452 13.7392 21.3463 13.9297 21.0002 13.9733C20.7584 14.0005 20.6925 14.0332 20.5936 14.1747C20.5276 14.2672 20.3518 14.485 20.2035 14.6537C19.9672 14.9314 19.9452 14.9749 20.0386 15.0076C20.9122 15.3179 21.7364 15.8568 22.4452 16.5753C23.2804 17.4136 23.7969 18.3336 24.0771 19.4658L24.1925 19.9231H24.7639C25.5881 19.9231 25.9452 19.7435 26.2529 19.1664C26.5111 18.6983 26.5936 18.2683 26.5936 17.4027C26.5936 16.4501 26.4947 15.9656 26.176 15.3015C25.5386 13.9951 23.9727 13.0751 22.8408 13.3418Z" fill="currentColor"/>
        <path d="M10.6868 16.5808C10.2033 16.6951 9.40659 17.1088 8.97802 17.4627C8.26922 18.056 7.73076 18.8617 7.46153 19.7326C7.2967 20.2661 7.24725 22.2802 7.38461 22.8137C7.60439 23.6574 7.9945 24.2018 8.56043 24.4576L8.81868 24.5774H14.8901H20.9615L21.2198 24.4576C21.6154 24.278 21.9396 23.9514 22.1319 23.5322C22.4505 22.8463 22.4835 22.5959 22.4615 21.2895C22.4396 20.1844 22.4286 20.0865 22.2857 19.651C22.1044 19.1066 21.8461 18.6113 21.5055 18.1758C20.6319 17.0544 19.0714 16.3195 18.022 16.5427C17.8571 16.5808 17.456 16.7278 17.1319 16.8748C16.3187 17.2504 15.7472 17.381 14.9176 17.3865C14.0165 17.3865 13.3791 17.2395 12.5659 16.8367C11.8791 16.4992 11.3461 16.423 10.6868 16.5808Z" fill="currentColor"/>
        <path d="M16.8967 22.1401H19.0769V20.3401L17.9868 19.4401L16.8967 20.3401V22.1401Z" fill="#0F121D" stroke="#0F121D"/>
    </svg>
}

export default PeopleSmall;