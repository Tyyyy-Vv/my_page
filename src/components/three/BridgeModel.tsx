import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const BridgeModel = () => {
  const groupRef = useRef<THREE.Group>(null)
  const archRefs = useRef<Mesh[]>([])

  // Gentle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  // Bridge parameters - 增大尺寸以展现宏伟
  const span = 18 // Total span (原12)
  const height = 6 // Arch height (原4)
  const deckWidth = 3.5 // Deck width (原2.5)

  // Create arch curve points
  const createArchCurve = (offset: number) => {
    const points = []
    const segments = 50
    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      const x = -span / 2 + t * span
      const y = height * Math.sin(Math.PI * t) // Parabolic arch
      const z = offset
      points.push([x, y, z])
    }
    return points
  }

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {/* Bridge Deck */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[span, 0.3, deckWidth]} />
        <meshStandardMaterial
          color="#2D3548"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Main Arches - Nielsen system inspired */}
      {[1.2, -1.2].map((offset, idx) => (
        <group key={`arch-${idx}`}>
          {/* Arch Ribs */}
          {createArchCurve(offset).map((point, i) => {
            if (i === createArchCurve(offset).length - 1) return null
            const [x, y, z] = point
            const nextPoint = createArchCurve(offset)[i + 1]
            const [nx, ny, nz] = nextPoint

            const dx = nx - x
            const dy = ny - y
            const dz = nz - z
            const length = Math.sqrt(dx * dx + dy * dy + dz * dz)

            return (
              <mesh
                key={i}
                position={[(x + nx) / 2, (y + ny) / 2, (z + nz) / 2]}
                rotation={[0, 0, Math.atan2(dy, dx)]}
                castShadow
                ref={(el) => {
                  if (el) archRefs.current[idx * 50 + i] = el
                }}
              >
                <cylinderGeometry args={[0.15, 0.15, length, 8]} />
                <meshStandardMaterial
                  color={idx === 0 ? '#3F51B5' : '#5C6BC0'}
                  metalness={0.8}
                  roughness={0.2}
                  emissive={idx === 0 ? '#3F51B5' : '#5C6BC0'}
                  emissiveIntensity={0.2}
                />
              </mesh>
            )
          })}

          {/* Suspension Cables */}
          {Array.from({ length: 10 }, (_, i) => {
            const t = (i + 1) / 11
            const x = -span / 2 + t * span
            const y = height * Math.sin(Math.PI * t)
            const cableLength = y + 0.15

            return (
              <mesh
                key={`cable-${i}`}
                position={[x, y / 2, offset]}
                castShadow
              >
                <cylinderGeometry args={[0.03, 0.03, cableLength, 6]} />
                <meshStandardMaterial
                  color="#FFC107"
                  metalness={0.9}
                  roughness={0.1}
                  emissive="#FFC107"
                  emissiveIntensity={0.3}
                />
              </mesh>
            )
          })}
        </group>
      ))}

      {/* Cross Beams */}
      {Array.from({ length: 8 }, (_, i) => {
        const x = -span / 2 + ((i + 1) / 9) * span
        return (
          <mesh key={`beam-${i}`} position={[x, 0, 0]} castShadow>
            <boxGeometry args={[0.2, 0.2, deckWidth]} />
            <meshStandardMaterial
              color="#1A1F3A"
              metalness={0.5}
              roughness={0.4}
            />
          </mesh>
        )
      })}

      {/* Foundation Pillars */}
      {[-span / 2, span / 2].map((x, idx) => (
        <mesh key={`pillar-${idx}`} position={[x, -2, 0]} receiveShadow>
          <cylinderGeometry args={[0.4, 0.5, 4, 12]} />
          <meshStandardMaterial
            color="#1A237E"
            metalness={0.4}
            roughness={0.6}
          />
        </mesh>
      ))}

      {/* Ground Plane */}
      <mesh position={[0, -4, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial
          color="#0A0E27"
          metalness={0.3}
          roughness={0.8}
          opacity={0.9}
          transparent
        />
      </mesh>
    </group>
  )
}

export default BridgeModel
