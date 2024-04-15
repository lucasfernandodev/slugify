import { FC } from "react";

export const CircleMobile: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={300}
      height={600}
      viewBox="0 0 300 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_df_68_150)">
        <circle
          cx={316.5}
          cy={297.75}
          r={267.75}
          fill="url(#paint0_radial_68_150)"
          fillOpacity={0.25}
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_df_68_150"
          x={0.75}
          y={0}
          width={599.5}
          height={599.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-16} dy={2} />
          <feGaussianBlur stdDeviation={16} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.469065 0 0 0 0 0.734802 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_68_150"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_68_150"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4}
            result="effect2_foregroundBlur_68_150"
          />
        </filter>
        <radialGradient
          id="paint0_radial_68_150"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-42.11 550.756 42.383) scale(522.333 974.034)"
        >
          <stop stopColor="#DFE8ED" />
          <stop offset={0.39} stopColor="#78BBFF" />
          <stop offset={0.651215} stopColor="#9581FF" />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
      </defs>
    </svg>
  )
}