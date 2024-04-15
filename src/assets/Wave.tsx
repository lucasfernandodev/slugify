import * as React from "react"

export const WaveIlustration:React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={1366}
      height={82}
      viewBox="0 0 1366 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M-174 53.622s256.76-26.85 421.623-23.204c117.639 2.601 182.843 18.409 300.413 23.204 249.317 10.169 389.555-39.834 638.524-23.204C1274.48 36.29 1411 53.622 1411 53.622"
        stroke="url(#paint0_linear_42_449)"
        strokeOpacity={0.5}
        strokeWidth={50}
      />
      <path
        d="M-65 39.622s256.76-26.85 421.623-23.204c117.639 2.601 182.843 18.409 300.413 23.204C906.353 49.791 1046.59-.212 1295.56 16.418 1383.48 22.29 1520 39.622 1520 39.622"
        stroke="url(#paint1_linear_42_449)"
        strokeOpacity={0.25}
        strokeWidth={25}
      />
      <path
        d="M-65 67.622s256.76-26.85 421.623-23.204c117.639 2.601 182.843 18.409 300.413 23.204 249.317 10.169 389.554-39.834 638.524-23.204C1383.48 50.29 1520 67.622 1520 67.622"
        stroke="url(#paint2_linear_42_449)"
        strokeOpacity={0.25}
        strokeWidth={25}
      />
      <defs>
        <linearGradient
          id="paint0_linear_42_449"
          x1={-174}
          y1={41}
          x2={1411}
          y2={41}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D1D22" stopOpacity={0.13} />
          <stop offset={1} stopColor="#78BBFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_42_449"
          x1={-65}
          y1={27}
          x2={1520}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#78BBFF" />
          <stop offset={1} stopColor="#17171C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_42_449"
          x1={-65}
          y1={55}
          x2={1520}
          y2={55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#232328" />
          <stop offset={0.5} stopColor="#78BBFF" />
          <stop offset={1} stopColor="#232328" />
        </linearGradient>
      </defs>
    </svg>
  )
}
