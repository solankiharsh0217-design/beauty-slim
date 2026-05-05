export default function WaveDivider({ color = '#080604', flip = false, height = 80 }) {
  return (
    <div
      className="w-full overflow-hidden leading-none pointer-events-none"
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,10 480,90 720,50 C960,10 1200,70 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}