// components/LeftBlur.tsx
export default function LeftBlur() {
  return (
    <svg
      width="835"
      height="1400"
      viewBox="0 0 835 1400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 pointer-events-none"
    >
      <g filter="url(#filter0_f_108_322)">
        <rect
          x="-165"
          y="400"
          width="600"
          height="600"
          rx="300"
          fill="#FFCF27"
          fillOpacity="0.13"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_108_322"
          x="-565"
          y="0"
          width="1400"
          height="1400"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="200"
            result="effect1_foregroundBlur_108_322"
          />
        </filter>
      </defs>
    </svg>
  );
}
