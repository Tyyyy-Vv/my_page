import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import BridgeModel from './BridgeModel'
import './BridgeCanvas.css'

const BridgeCanvas = () => {
  return (
    <div className="bridge-canvas-container">
      <Canvas
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 5, 15]} fov={50} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3F51B5" />
        <pointLight position={[10, -10, 10]} intensity={0.3} color="#FFC107" />

        {/* Scene */}
        <BridgeModel />

        {/* Controls - subtle auto-rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />

        {/* Environment */}
        <fog attach="fog" args={['#0A0E27', 10, 50]} />
      </Canvas>
    </div>
  )
}

export default BridgeCanvas
