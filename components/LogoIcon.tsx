export default function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gNavy" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1A2E4C" offset="0" />
          <stop stopColor="#0F1C2E" offset="1" />
        </linearGradient>
        <linearGradient id="gBeige" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#EDE7DD" offset="0" />
          <stop stopColor="#D9CBB3" offset="1" />
        </linearGradient>
        <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#2ED3C6" offset="0" />
          <stop stopColor="#1FB5A8" offset="1" />
        </linearGradient>
      </defs>
      <path
        d="M130 380 C210 260 270 200 360 260"
        fill="none"
        stroke="url(#gNavy)"
        strokeWidth="42"
        strokeLinecap="round"
      />
      <path
        d="M120 360 C180 240 230 180 320 240"
        fill="none"
        stroke="url(#gBeige)"
        strokeWidth="38"
        strokeLinecap="round"
      />
      <path
        d="M260 120 C330 180 380 240 420 340"
        fill="none"
        stroke="url(#gTeal)"
        strokeWidth="38"
        strokeLinecap="round"
      />
      <circle cx="190" cy="360" r="6" fill="#fff" opacity={0.6} />
      <circle cx="300" cy="210" r="6" fill="#fff" opacity={0.6} />
    </svg>
  )
}
