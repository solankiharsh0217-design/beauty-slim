export default function WaveDivider({ color = '#0c0a08', flip = false, height = 64 }) {
  return (
    <div
      className="w-full overflow-hidden leading-none pointer-events-none"
      style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C160,80 320,0 480,40 C640,80 800,0 960,40 C1120,80 1280,10 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
