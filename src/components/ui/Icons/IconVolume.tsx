import React, { SVGProps }  from "react";


export const IconVolume = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={18}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)" filter="url(#b)">
            <path fill="#E3E3E3" d="M-1060-403H860V677h-1920z" />
            <path
                fill="#05AC6A"
                fillOpacity={0.15}
                d="M-29.165 677-87 484h-395.5L-550 677h-318l54.5-138.5L860-403v579.5L-29.164 677Z"
            />
            <path
                fill="#0CB673"
                fillOpacity={0.3}
                d="M-125.547-403 289.069 677H-29.125l-57.853-192.857H-482.31L-549.806 677H-868l424.259-1080h318.194Z"
            />
            <g filter="url(#c)">
                <rect width={580} height={200} x={-390} y={-24} fill="#FFFDFD" rx={8} />
            </g>
            <path
                stroke="#253053"
                strokeLinecap="round"
                d="M19.49 3.16s1.5 1.8 1.5 6-1.5 6-1.5 6M17.49 6.16s.5.9.5 3-.5 3-.5 3M1.45 5.736a3.215 3.215 0 0 1 1.38-1.3c.6-.277 1.287-.277 2.66-.277.513 0 .769 0 1.017-.042a3 3 0 0 0 .712-.213c.23-.102.444-.243.871-.525l.22-.144c2.542-1.677 3.813-2.515 4.88-2.151.206.07.404.17.58.295.923.648.993 2.157 1.133 5.175a68.21 68.21 0 0 1 .088 2.605c0 .532-.036 1.488-.088 2.605-.14 3.018-.21 4.527-1.133 5.175a2.313 2.313 0 0 1-.58.295c-1.066.364-2.338-.474-4.88-2.15l-.22-.145c-.427-.282-.641-.423-.871-.525a3 3 0 0 0-.712-.213c-.248-.042-.504-.042-1.016-.042-1.374 0-2.061 0-2.66-.277a3.215 3.215 0 0 1-1.382-1.3c-.313-.581-.35-1.186-.423-2.395-.011-.179-.02-.356-.026-.528"
            />
        </g>
        <defs>
            <filter
                id="b"
                width={1928}
                height={1088}
                x={-1064}
                y={-403}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4090_2" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4090_2"
                    result="shape"
                />
            </filter>
            <filter
                id="c"
                width={600}
                height={220}
                x={-400}
                y={-34}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feMorphology
                    in="SourceAlpha"
                    operator="dilate"
                    radius={2}
                    result="effect1_dropShadow_4090_2"
                />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0.109804 0 0 0 0 0.152941 0 0 0 0 0.298039 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4090_2" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4090_2"
                    result="shape"
                />
            </filter>
            <clipPath id="a">
                <path fill="#fff" d="M-1060-403H860V677h-1920z" />
            </clipPath>
        </defs>
    </svg>
)
