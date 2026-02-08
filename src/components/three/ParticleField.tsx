import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
}

const ParticleField = ({ count = 2000 }: ParticleFieldProps) => {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Generate random particle positions and velocities
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50
      const y = (Math.random() - 0.5) * 50
      const z = (Math.random() - 0.5) * 50
      const vx = (Math.random() - 0.5) * 0.02
      const vy = (Math.random() - 0.5) * 0.02
      const vz = (Math.random() - 0.5) * 0.02
      const size = Math.random() * 0.1 + 0.05

      temp.push({ x, y, z, vx, vy, vz, size })
    }
    return temp
  }, [count])

  // Animate particles
  useFrame((state) => {
    if (!meshRef.current) return

    particles.forEach((particle, i) => {
      // Update position with gentle drift
      particle.x += particle.vx
      particle.y += particle.vy
      particle.z += particle.vz

      // Boundary wrapping
      if (Math.abs(particle.x) > 25) particle.x *= -0.9
      if (Math.abs(particle.y) > 25) particle.y *= -0.9
      if (Math.abs(particle.z) > 25) particle.z *= -0.9

      // Subtle wave motion
      const wave = Math.sin(state.clock.elapsedTime + i * 0.1) * 0.01

      dummy.position.set(
        particle.x,
        particle.y + wave,
        particle.z
      )
      dummy.scale.set(particle.size, particle.size, particle.size)

      // Pulsing effect
      const pulse = 0.7 + Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.3
      dummy.scale.multiplyScalar(pulse)

      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial
        color="#3F51B5"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  )
}

export default ParticleField
