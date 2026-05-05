export default function WaveDivider({ color = '#030201', flip = false, height = 60 }) {
  return (
    <div 
      className="relative w-full overflow-hidden pointer-events-none"
      style={{ 
        transform: flip ? 'scaleY(-1)' : undefined,
        marginTop: '-0.5px',
        marginBottom: '-0.5px'
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ 
          display: 'block', 
          width: '100%', 
          height
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C360,50 540,20 720,40 C900,60 1080,20 1440,35 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}