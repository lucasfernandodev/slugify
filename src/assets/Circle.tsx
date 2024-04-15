import { FC } from "react"

export const CircleIlustration: FC<React.SVGProps<SVGSVGElement>> = (props)  => {
  return (
    <svg
      width={778}
      height={1199}
      viewBox="0 0 778 1199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_df_42_466)">
        <circle
          cx={631.5}
          cy={595.5}
          r={535.5}
          fill="url(#paint0_radial_42_466)"
          fillOpacity={0.25}
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_df_42_466"
          x={0}
          y={0}
          width={1199}
          height={1199}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-32} dy={4} />
          <feGaussianBlur stdDeviation={32} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.469065 0 0 0 0 0.734802 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_42_466"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_466"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={8}
            result="effect2_foregroundBlur_42_466"
          />
        </filter>
        <radialGradient
          id="paint0_radial_42_466"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(775.00376 -700.50309 1306.27763 1445.2043 226 760.5)"
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
