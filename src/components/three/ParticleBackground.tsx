import { Canvas } from '@react-three/fiber'
import ParticleField from './ParticleField'
import './ParticleBackground.css'

const ParticleBackground = () => {
  return (
    <div className="particle-background">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        gl={{
          alpha: true,
          antialias: false, // Disable for performance
          powerPreference: 'high-performance'
        }}
      >
        <ParticleField count={1500} />
      </Canvas>
    </div>
  )
}

export default ParticleBackground
