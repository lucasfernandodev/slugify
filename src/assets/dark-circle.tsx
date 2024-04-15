import * as React from "react"

export const DarkCircleIlustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={198}
      height={223}
      viewBox="0 0 198 223"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_i_108_454)">
        <circle
          cx={52.5}
          cy={145.5}
          r={145.5}
          fill="#F0F0FF"
          fillOpacity={0.01}
        />
      </g>
      <defs>
        <filter
          id="filter0_i_108_454"
          x={-93}
          y={0}
          width={297}
          height={297}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={6} dy={6} />
          <feGaussianBlur stdDeviation={8} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.941176 0 0 0 0 1 0 0 0 0.08 0" />
          <feBlend in2="shape" result="effect1_innerShadow_108_454" />
        </filter>
      </defs>
    </svg>
  )
}