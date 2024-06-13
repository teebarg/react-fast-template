import { IconSvgProps } from "@/store/types";
import * as React from "react";

export const Logo: React.FC<IconSvgProps> = ({ size = 36, width, height, ...props }) => (
    <svg fill="none" height={size || height} viewBox="0 0 32 32" width={size || width} {...props}>
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
                fill="currentColor"
            />
        </svg>
    );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                fill="currentColor"
            />
        </svg>
    );
};

export const GithubIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const FacebookIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                fill="currentColor"
            />
        </svg>
    );
};

export const YoutubeIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                fill="currentColor"
            />
        </svg>
    );
};

export const MoonFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg aria-hidden="true" focusable="false" height={size || height} role="presentation" viewBox="0 0 24 24" width={size || width} {...props}>
        <path
            d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
            fill="currentColor"
        />
    </svg>
);

export const SunFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg aria-hidden="true" focusable="false" height={size || height} role="presentation" viewBox="0 0 24 24" width={size || width} {...props}>
        <g fill="currentColor">
            <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
            <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
        </g>
    </svg>
);

export const HeartFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg aria-hidden="true" focusable="false" height={size || height} role="presentation" viewBox="0 0 24 24" width={size || width} {...props}>
        <path
            d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
    </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...props}>
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
    const { width, height = 40 } = props;

    return (
        <svg fill="none" height={height} viewBox="0 0 161 32" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                className="fill-black dark:fill-white"
                d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
            />
            <path
                className="fill-black dark:fill-white"
                d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
            />
            <path
                className="fill-white dark:fill-black"
                d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
            />
        </svg>
    );
};

export const EyeSlashFilledIcon = (props: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...props}>
        <path
            d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
            fill="currentColor"
        />
        <path
            d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
            fill="currentColor"
        />
        <path
            d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
            fill="currentColor"
        />
        <path
            d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
            fill="currentColor"
        />
        <path
            d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
            fill="currentColor"
        />
    </svg>
);

export const EyeFilledIcon = ({ width = "1em", height = "1em", ...props }: IconSvgProps) => (
    <svg fill="none" focusable="false" height={height} role="presentation" viewBox="0 0 24 24" width={width} {...props}>
        <path
            d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
            fill="currentColor"
        />
        <path
            d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
            fill="currentColor"
        />
    </svg>
);

export const PlusIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
            <path d="M6 12h12" />
            <path d="M12 18V6" />
        </g>
    </svg>
);

export const VerticalDotsIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            fill="currentColor"
        />
    </svg>
);

export const ChevronDownIcon = ({ strokeWidth = 1.5, width = "1em", height = "1em", ...otherProps }) => (
    <svg aria-hidden="true" fill="none" focusable="false" height={height} role="presentation" viewBox="0 0 24 24" width={width} {...otherProps}>
        <path
            d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={strokeWidth}
        />
    </svg>
);

export const ChevronRightIcon = ({ strokeWidth = 1.5, width = "1em", height = "1em", ...otherProps }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const NotificationIcon = ({ size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg fill="none" height={size || height || 24} viewBox="0 0 24 24" width={size || width || 24} xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                clipRule="evenodd"
                d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const CheckIcon = ({ strokeWidth = 1.5, size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg width={size || width || 18} height={size || height || 18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const EyeIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" role="presentation" viewBox="0 0 20 20" width={width} height={height} {...props}>
        <path
            d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
    </svg>
);

export const EditIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" role="presentation" viewBox="0 0 20 20" width={width} height={height} {...props}>
        <path
            d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
        <path
            d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
        <path d="M2.5 18.3333H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} />
    </svg>
);

export const DeleteIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" role="presentation" viewBox="0 0 20 20" width={width} height={height} {...props}>
        <path
            d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path d="M8.60834 13.75H11.3833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        <path d="M7.91669 10.4167H12.0834" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
    </svg>
);

export const MailIcon = ({ height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} {...props}>
        <path
            fill="currentColor"
            d="M12 13.5l-11.2-7.2c-.3-.2-.3-.6-.1-.8.2-.2.6-.2.8 0l11 7.1 11-7.1c.3-.2.6-.2.8 0 .2.2.2.6 0 .8l-11.2 7.2-11.2-7.2z"
        />
        <path
            fill="currentColor"
            d="M21 4h-18c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-1 14h-16c-.6 0-1-.4-1-1v-10.5l8.7 5.6c.1.1.3.1.4.1s.3 0 .4-.1l8.7-5.6v10.5c0 .6-.4 1-1 1z"
        />
    </svg>
);

export const LocationIcon = ({ height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} {...props}>
        <path d="M12 2C8.1 2 5 5.1 5 9c0 4.9 7 13 7 13s7-8.1 7-13c0-3.9-3.1-7-7-7zm0 17.2c-1.5-1.8-6-7.5-6-11.2 0-3.3 2.7-6 6-6s6 2.7 6 6c0 3.7-4.5 9.4-6 11.2z" />
        <circle cx="12" cy="9" r="2.5" />
    </svg>
);

export const CancelIcon = ({ strokeWidth = 1.5, size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || width} height={size || height} {...props}>
        <path
            fill="currentColor"
            d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.41z"
            strokeWidth={strokeWidth}
        />
    </svg>
);

export const AdminIcon = ({ size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || width} height={size || height} {...props}>
        <path
            fill="currentColor"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2s5.78 1.28 6 2H6zm16-12h-2v6h-2v-6h-2V6h6v2z"
        />
    </svg>
);

export const ComponentsIcon = ({ strokeWidth = 2, size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || width} height={size || height} {...props}>
        <rect x="3" y="5" width="18" height="2" fill="currentColor" />
        <circle cx="6" cy="6" r="3" fill="currentColor" />

        <rect x="3" y="10" width="8" height="4" rx="2" ry="2" fill="currentColor" />

        <rect x="15" y="10" width="6" height="6" rx="1" ry="1" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M16 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />

        <rect x="3" y="17" width="10" height="4" rx="2" ry="2" fill="currentColor" />
        <path d="M16 18h5v2h-5z" fill="currentColor" />
    </svg>
);

export const EcommerceIcon = ({ size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || width} height={size || height} {...props} fill="currentColor">
        <path d="M7 4h-2V2H2v2H1v2h1v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6h1V4h-1V2h-3v2h-2V2h-2v2h-6V2H7v2zm0 2h10v12H7V6zm2 2v2h6V8H9z" />

        <path d="M19 8.5c-1.1 0-2-.9-2-2 0-.2.2-.5.4-.7.4-.6.6-1.3.6-2 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .7.2 1.4.6 2 .2.2.4.5.4.7 0 1.1-.9 2-2 2-.3 0-.6 0-.9.1.2.3.3.6.3.9 0 1.1-.9 2-2 2s-2-.9-2-2c0-.3.1-.6.3-.9-.3-.1-.6-.1-.9-.1-1.1 0-2 .9-2 2 0 1.6 1.3 3 3 3h8c1.7 0 3-1.4 3-3 0-1.1-.9-2-2-2z" />
    </svg>
);

export const ProfileIcon = ({ size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || width} height={size || height} {...props} fill="currentColor">
        <circle cx="12" cy="8" r="4" />

        <path d="M12 14c-5 0-8 2.5-8 6v2h16v-2c0-3.5-3-6-8-6z" />
    </svg>
);

export const CalendarIcon = ({ strokeWidth = 2, size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || width} height={size || height} {...props} fill="currentColor">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />

        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="7" y1="10" x2="7" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="11" y1="10" x2="11" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="15" y1="10" x2="15" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="19" y1="10" x2="19" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />

        <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />

        <circle cx="7" cy="4" r="1.5" fill="currentColor" />
        <circle cx="17" cy="4" r="1.5" fill="currentColor" />
    </svg>
);

export const DocumentIcon = ({ strokeWidth = 2, size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || width} height={size || height} {...props} fill="currentColor">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM13 9V3.5L18.5 9H13z" />

        <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="8" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
);

export const RightArrowIcon = ({ strokeWidth = 1.5, size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size || width} height={size || height} {...props} fill="currentColor" viewBox="0 0 24 24">
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M4 12h16m0 0l-6-6m6 6l-6 6"
            ></path>
        </svg>
    );
};

export const StarIcon = ({ size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
            ></path>
        </svg>
    );
};

export const FunnelIcon = ({ size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                d="M19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986c.26.43.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683c.668-.417.668-1.372.668-3.282v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3Z"
            ></path>
        </svg>
    );
};

export const MasterCardIcon = ({ height = "30", width = "30", ...props }: IconSvgProps) => {
    return (
        <svg fill="none" viewBox="0 0 512 512" width={width} height={height} {...props}>
            <path d="M325.228 131.82H186.781V380.612H325.228V131.82Z" fill="#FF5F00"></path>
            <path
                d="M195.571 256.225C195.549 232.264 200.978 208.613 211.448 187.061C221.919 165.509 237.155 146.622 256.003 131.829C232.662 113.482 204.629 102.072 175.11 98.9037C145.591 95.7353 115.776 100.936 89.0725 113.912C62.3692 126.887 39.8553 147.114 24.1041 172.28C8.35298 197.446 0 226.536 0 256.225C0 285.914 8.35298 315.004 24.1041 340.17C39.8553 365.336 62.3692 385.562 89.0725 398.538C115.776 411.513 145.591 416.714 175.11 413.546C204.629 410.378 232.662 398.968 256.003 380.621C237.155 365.828 221.919 346.941 211.449 325.389C200.979 303.837 195.549 280.185 195.571 256.225Z"
                fill="#EB001B"
            ></path>
            <path
                d="M512 256.225C512.001 285.913 503.649 315.003 487.899 340.169C472.149 365.335 449.636 385.562 422.933 398.538C396.23 411.513 366.415 416.714 336.896 413.546C307.378 410.378 279.346 398.968 256.005 380.621C274.837 365.813 290.061 346.922 300.529 325.374C310.998 303.825 316.437 280.181 316.437 256.225C316.437 232.268 310.998 208.624 300.529 187.076C290.061 165.527 274.837 146.637 256.005 131.828C279.346 113.482 307.378 102.072 336.896 98.9036C366.415 95.7353 396.23 100.936 422.933 113.912C449.636 126.888 472.149 147.114 487.899 172.28C503.649 197.447 512.001 226.536 512 256.225Z"
                fill="#F79E1B"
            ></path>
            <path
                d="M496.905 354.265V349.171H498.959V348.134H493.729V349.171H495.783V354.265H496.905ZM507.06 354.265V348.124H505.457L503.613 352.348L501.768 348.124H500.164V354.265H501.296V349.632L503.026 353.626H504.199L505.929 349.622V354.265H507.06Z"
                fill="#F79E1B"
            ></path>
        </svg>
    );
};

export const PayPalIcon = ({ height = "30", width = "30", ...props }: IconSvgProps) => {
    return (
        <svg fill="none" viewBox="0 0 512 512" width={width} height={height} {...props}>
            <path
                d="M345.495 188.005H305.665C302.946 188.005 300.628 189.985 300.203 192.675L284.097 294.794C283.776 296.809 285.337 298.626 287.369 298.626H307.808C309.706 298.626 311.331 297.24 311.628 295.353L316.199 266.407C316.618 263.711 318.942 261.731 321.661 261.731H334.262C360.501 261.731 375.635 249.037 379.595 223.881C381.382 212.876 379.664 204.228 374.511 198.172C368.857 191.522 358.824 188.005 345.495 188.005ZM350.089 225.302C347.917 239.592 336.999 239.592 326.436 239.592H320.433L324.654 212.905C324.905 211.292 326.29 210.104 327.927 210.104H330.681C337.867 210.104 344.656 210.104 348.162 214.203C350.252 216.649 350.887 220.282 350.089 225.302Z"
                fill="#179BD7"
            ></path>
            <path
                d="M464.528 224.843H445.469C443.833 224.843 442.441 226.03 442.197 227.643L441.353 232.977L440.013 231.044C435.885 225.052 426.684 223.049 417.496 223.049C396.422 223.049 378.429 239.01 374.923 261.4C373.107 272.568 375.686 283.248 382.022 290.695C387.845 297.543 396.148 300.396 406.042 300.396C423.022 300.396 432.437 289.478 432.437 289.478L431.587 294.777C431.267 296.804 432.828 298.62 434.872 298.62H452.044C454.763 298.62 457.081 296.641 457.506 293.945L467.818 228.674C468.133 226.665 466.572 224.843 464.528 224.843ZM437.946 261.959C436.118 272.853 427.459 280.167 416.43 280.167C410.904 280.167 406.467 278.391 403.625 275.025C400.807 271.683 399.747 266.926 400.632 261.627C402.362 250.825 411.143 243.272 422.003 243.272C427.418 243.272 431.82 245.072 434.72 248.467C437.637 251.896 438.79 256.683 437.946 261.959Z"
                fill="#179BD7"
            ></path>
            <path
                d="M487.012 190.807L470.667 294.794C470.347 296.809 471.907 298.626 473.94 298.626H490.372C493.103 298.626 495.421 296.646 495.84 293.95L511.958 191.837C512.278 189.823 510.718 188 508.686 188H490.285C488.66 188.006 487.263 189.194 487.012 190.807Z"
                fill="#179BD7"
            ></path>
            <path
                d="M61.4399 188.005H21.6162C18.891 188.005 16.5734 189.985 16.1483 192.675L0.0418073 294.794C-0.27846 296.809 1.28211 298.626 3.32599 298.626H22.3382C25.0634 298.626 27.381 296.646 27.806 293.95L32.15 266.407C32.5693 263.711 34.8927 261.731 37.612 261.731H50.2189C76.4517 261.731 91.5916 249.037 95.5454 223.881C97.3273 212.876 95.6211 204.228 90.4677 198.172C84.8077 191.522 74.7688 188.005 61.4399 188.005ZM66.0343 225.302C63.8564 239.592 52.9383 239.592 42.3811 239.592H36.3717L40.5876 212.905C40.838 211.292 42.2355 210.104 43.866 210.104H46.6203C53.8117 210.104 60.5955 210.104 64.101 214.203C66.1915 216.649 66.832 220.282 66.0343 225.302Z"
                fill="#253B80"
            ></path>
            <path
                d="M180.481 224.843H161.411C159.786 224.843 158.383 226.03 158.132 227.643L157.288 232.977L155.955 231.044C151.826 225.052 142.62 223.049 133.431 223.049C112.357 223.049 94.3584 239.01 90.853 261.4C89.0304 272.568 91.6216 283.248 97.9571 290.695C103.768 297.543 112.084 300.396 121.977 300.396C138.957 300.396 148.373 289.478 148.373 289.478L147.523 294.777C147.202 296.804 148.763 298.62 150.795 298.62H167.973C170.704 298.62 173.01 296.641 173.441 293.945L183.748 228.674C184.074 226.665 182.519 224.843 180.481 224.843ZM153.899 261.959C152.059 272.853 143.412 280.167 132.383 280.167C126.845 280.167 122.42 278.391 119.578 275.025C116.76 271.683 115.688 266.926 116.585 261.627C118.303 250.825 127.096 243.272 137.956 243.272C143.371 243.272 147.773 245.072 150.673 248.467C153.579 251.896 154.732 256.683 153.899 261.959Z"
                fill="#253B80"
            ></path>
            <path
                d="M282.047 224.842H262.883C261.055 224.842 259.337 225.75 258.3 227.27L231.87 266.203L220.666 228.79C219.962 226.449 217.801 224.842 215.356 224.842H196.524C194.235 224.842 192.646 227.078 193.374 229.232L214.482 291.178L194.637 319.192C193.077 321.399 194.649 324.433 197.345 324.433H216.485C218.302 324.433 220.002 323.548 221.033 322.057L284.772 230.053C286.298 227.852 284.731 224.842 282.047 224.842Z"
                fill="#253B80"
            ></path>
        </svg>
    );
};

export const VisaCardIcon = ({ height = "30", width = "30", ...props }: IconSvgProps) => {
    return (
        <svg fill="none" viewBox="0 0 512 512" width={width} height={height} {...props}>
            <path
                d="M253.509 175.921L219.303 335.84H177.929L212.138 175.921H253.509ZM427.568 279.182L449.343 219.13L461.874 279.182H427.568ZM473.744 335.84H512L478.578 175.921H443.29C435.337 175.921 428.632 180.532 425.665 187.643L363.587 335.84H407.037L415.662 311.957H468.734L473.744 335.84ZM365.742 283.632C365.921 241.426 307.397 239.088 307.789 220.23C307.915 214.5 313.382 208.397 325.331 206.836C331.255 206.073 347.603 205.454 366.134 213.993L373.381 180.068C363.429 176.467 350.62 173 334.683 173C293.783 173 265.012 194.725 264.782 225.859C264.519 248.883 285.334 261.72 300.984 269.388C317.119 277.226 322.525 282.251 322.446 289.254C322.335 299.983 309.58 304.734 297.704 304.914C276.892 305.238 264.828 299.289 255.214 294.807L247.704 329.866C257.387 334.297 275.227 338.153 293.7 338.351C337.183 338.351 365.612 316.881 365.742 283.632ZM194.391 175.921L127.357 335.84H83.6302L50.64 208.213C48.6401 200.365 46.8957 197.48 40.8134 194.164C30.8645 188.761 14.4413 183.708 0 180.564L0.978353 175.921H71.3758C80.3427 175.921 88.4104 181.888 90.4642 192.218L107.891 284.765L150.927 175.921H194.391Z"
                fill="#1434CB"
            ></path>
        </svg>
    );
};

export const EllipsisIcon = ({ size = 24, height = "24", width = "24", ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
        </svg>
    );
};

export const CopyIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5M11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3zM4 6.5h4A1.5 1.5 0 0 1 9.5 8v4A1.5 1.5 0 0 1 8 13.5H4A1.5 1.5 0 0 1 2.5 12V8A1.5 1.5 0 0 1 4 6.5"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const ThumbsUpIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m4 7l2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5L9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14zm5.771 6.11l-3.863-.455l-.379-5.3l2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814ZM2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const ThumbsDownIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12 9l-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163l.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2zM6.229 2.89l3.863.455l.379 5.3l-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663l.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814Zm7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const EmojiIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5.67 2.835a.75.75 0 1 0 1.34-.67C10.268 9.356 9.219 8.75 8 8.75s-2.267.606-2.67 1.415a.75.75 0 1 0 1.34.67c.097-.191.548-.585 1.33-.585s1.233.394 1.33.585M10 8a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 10 8m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const LightThemeIcon = ({ height = "117", width = "240", ...props }: IconSvgProps) => {
    return (
        <svg fill="none" viewBox="0 0 240 117" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
            <path d="M12 0.5H228C234.351 0.5 239.5 5.64873 239.5 12V116.5H0.5V12C0.5 5.64873 5.64873 0.5 12 0.5Z" fill="black" />
            <path d="M12 0.5H228C234.351 0.5 239.5 5.64873 239.5 12V116.5H0.5V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#3F3F46" />
            <path
                d="M32 48.5C32 45.4624 34.4624 43 37.5 43H67.5C70.5376 43 73 45.4624 73 48.5V48.5C73 51.5376 70.5376 54 67.5 54H37.5C34.4624 54 32 51.5376 32 48.5V48.5Z"
                fill="#27272A"
            />
            <path
                d="M17 105C17 101.686 19.6863 99 23 99H67C70.3137 99 73 101.686 73 105V105C73 108.314 70.3137 111 67 111H23C19.6863 111 17 108.314 17 105V105Z"
                fill="#27272A"
            />
            <path
                d="M88 25.5C88 22.4624 90.4624 20 93.5 20H207.5C210.538 20 213 22.4624 213 25.5V25.5C213 28.5376 210.538 31 207.5 31H93.5C90.4624 31 88 28.5376 88 25.5V25.5Z"
                fill="#3F3F46"
            />
            <path
                d="M88 105C88 101.686 90.6863 99 94 99H189C192.314 99 195 101.686 195 105V105C195 108.314 192.314 111 189 111H94C90.6863 111 88 108.314 88 105V105Z"
                fill="#27272A"
            />
            <path
                d="M88 51C88 46.5817 91.5817 43 96 43H221C225.418 43 229 46.5817 229 51V85C229 89.4183 225.418 93 221 93H96C91.5817 93 88 89.4183 88 85V51Z"
                fill="#27272A"
            />
            <path
                d="M17 48.5C17 45.4624 19.4624 43 22.5 43V43C25.5376 43 28 45.4624 28 48.5V48.5C28 51.5376 25.5376 54 22.5 54V54C19.4624 54 17 51.5376 17 48.5V48.5Z"
                fill="#27272A"
            />
            <path
                d="M17 66.5C17 63.4624 19.4624 61 22.5 61V61C25.5376 61 28 63.4624 28 66.5V66.5C28 69.5376 25.5376 72 22.5 72V72C19.4624 72 17 69.5376 17 66.5V66.5Z"
                fill="#27272A"
            />
            <path
                d="M17 86.5C17 83.4624 19.4624 81 22.5 81V81C25.5376 81 28 83.4624 28 86.5V87.5C28 90.5376 25.5376 93 22.5 93V93C19.4624 93 17 90.5376 17 87.5V86.5Z"
                fill="#27272A"
            />
            <path
                d="M32 25.5C32 22.4624 34.4624 20 37.5 20H67.5C70.5376 20 73 22.4624 73 25.5V25.5C73 28.5376 70.5376 31 67.5 31H37.5C34.4624 31 32 28.5376 32 25.5V25.5Z"
                fill="#3F3F46"
            />
            <path
                d="M32 66.5C32 63.4624 34.4624 61 37.5 61H67.5C70.5376 61 73 63.4624 73 66.5V66.5C73 69.5376 70.5376 72 67.5 72H37.5C34.4624 72 32 69.5376 32 66.5V66.5Z"
                fill="#27272A"
            />
            <path
                d="M32 87C32 83.6863 34.6863 81 38 81H67C70.3137 81 73 83.6863 73 87V87C73 90.3137 70.3137 93 67 93H38C34.6863 93 32 90.3137 32 87V87Z"
                fill="#27272A"
            />
            <circle cx="22.5" cy="25.5" fill="#3F3F46" r="5.5" />
        </svg>
    );
};

export const DarkThemeIcon = ({ height = "117", width = "240", ...props }: IconSvgProps) => {
    return (
        <svg fill="none" viewBox="0 0 240 117" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
            <path d="M12 0.5H228C234.351 0.5 239.5 5.64873 239.5 12V116.5H0.5V12C0.5 5.64873 5.64873 0.5 12 0.5Z" fill="white" />
            <path d="M12 0.5H228C234.351 0.5 239.5 5.64873 239.5 12V116.5H0.5V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#E4E4E7" />
            <path
                d="M32 48.5C32 45.4624 34.4624 43 37.5 43H67.5C70.5376 43 73 45.4624 73 48.5V48.5C73 51.5376 70.5376 54 67.5 54H37.5C34.4624 54 32 51.5376 32 48.5V48.5Z"
                fill="#F4F4F5"
            />
            <path
                d="M17 105C17 101.686 19.6863 99 23 99H67C70.3137 99 73 101.686 73 105V105C73 108.314 70.3137 111 67 111H23C19.6863 111 17 108.314 17 105V105Z"
                fill="#F4F4F5"
            />
            <path
                d="M88 25.5C88 22.4624 90.4624 20 93.5 20H207.5C210.538 20 213 22.4624 213 25.5V25.5C213 28.5376 210.538 31 207.5 31H93.5C90.4624 31 88 28.5376 88 25.5V25.5Z"
                fill="#E4E4E7"
            />
            <path
                d="M88 105C88 101.686 90.6863 99 94 99H189C192.314 99 195 101.686 195 105V105C195 108.314 192.314 111 189 111H94C90.6863 111 88 108.314 88 105V105Z"
                fill="#F4F4F5"
            />
            <path
                d="M88 51C88 46.5817 91.5817 43 96 43H221C225.418 43 229 46.5817 229 51V85C229 89.4183 225.418 93 221 93H96C91.5817 93 88 89.4183 88 85V51Z"
                fill="#F4F4F5"
            />
            <path
                d="M17 48.5C17 45.4624 19.4624 43 22.5 43V43C25.5376 43 28 45.4624 28 48.5V48.5C28 51.5376 25.5376 54 22.5 54V54C19.4624 54 17 51.5376 17 48.5V48.5Z"
                fill="#F4F4F5"
            />
            <path
                d="M17 66.5C17 63.4624 19.4624 61 22.5 61V61C25.5376 61 28 63.4624 28 66.5V66.5C28 69.5376 25.5376 72 22.5 72V72C19.4624 72 17 69.5376 17 66.5V66.5Z"
                fill="#F4F4F5"
            />
            <path
                d="M17 86.5C17 83.4624 19.4624 81 22.5 81V81C25.5376 81 28 83.4624 28 86.5V87.5C28 90.5376 25.5376 93 22.5 93V93C19.4624 93 17 90.5376 17 87.5V86.5Z"
                fill="#F4F4F5"
            />
            <path
                d="M32 25.5C32 22.4624 34.4624 20 37.5 20H67.5C70.5376 20 73 22.4624 73 25.5V25.5C73 28.5376 70.5376 31 67.5 31H37.5C34.4624 31 32 28.5376 32 25.5V25.5Z"
                fill="#E4E4E7"
            />
            <path
                d="M32 66.5C32 63.4624 34.4624 61 37.5 61H67.5C70.5376 61 73 63.4624 73 66.5V66.5C73 69.5376 70.5376 72 67.5 72H37.5C34.4624 72 32 69.5376 32 66.5V66.5Z"
                fill="#F4F4F5"
            />
            <path
                d="M32 87C32 83.6863 34.6863 81 38 81H67C70.3137 81 73 83.6863 73 87V87C73 90.3137 70.3137 93 67 93H38C34.6863 93 32 90.3137 32 87V87Z"
                fill="#F4F4F5"
            />
            <circle cx="22.5" cy="25.5" fill="#E4E4E7" r="5.5" />
        </svg>
    );
};
