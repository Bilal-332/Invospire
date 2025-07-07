"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function HolographicNetwork() {
  const coreRef = useRef()
  const ringsRef = useRef()
  const particlesRef = useRef()
  const energyFieldRef = useRef()

  // Create holographic core structure
  const coreData = useMemo(() => {
    const vertices = []
    const colors = []
    
    // Create icosphere vertices for the core (smaller size)
    const phi = (1 + Math.sqrt(5)) / 2 // Golden ratio
    const vertices_raw = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ]
    
    vertices_raw.forEach(([x, y, z], index) => {
      const length = Math.sqrt(x * x + y * y + z * z)
      vertices.push(x / length * 0.6, y / length * 0.6, z / length * 0.6) // Reduced from 1.2 to 0.6
      
      // More vibrant teal and yellow gradient colors
      const hue = index % 2 === 0 ? 0.48 : 0.15 // Teal or yellow
      const color = new THREE.Color().setHSL(hue, 0.8, 0.7)
      colors.push(color.r, color.g, color.b)
    })
    
    return { vertices: new Float32Array(vertices), colors: new Float32Array(colors) }
  }, [])

  // Create orbital rings (teal and yellow colors, more refined)
  const rings = useMemo(() => {
    return [...Array(4)].map((_, i) => ({ // Increased to 4 rings
      radius: 1.0 + i * 0.4, // Smaller, more compact spacing
      tilt: (i * Math.PI) / 5, // Slightly different angles
      speed: 0.02 + i * 0.006, // Slower, smoother rotation
      // Enhanced teal and yellow color scheme
      color: i === 0 ? new THREE.Color("#0D9488") : // Teal-600 (darker)
             i === 1 ? new THREE.Color("#F59E0B") : // Amber-500 (yellow)
             i === 2 ? new THREE.Color("#14B8A6") : // Teal-500
             new THREE.Color("#FBBF24") // Amber-400 (bright yellow)
    }))
  }, [])

  // Create flowing particles (more dynamic and refined)
  const particles = useMemo(() => {
    const positions = []
    const velocities = []
    const colors = []
    const particleCount = 80 // Increased for more richness
    
    for (let i = 0; i < particleCount; i++) {
      // Create more complex spiral pattern
      const t = (i / particleCount) * Math.PI * 8
      const radius = 0.6 + Math.sin(t * 0.3) * 1.0 // More dynamic radius variation
      
      positions.push(
        Math.cos(t) * radius + (Math.random() - 0.5) * 0.2, // Add slight randomness
        Math.sin(t * 0.4) * 1.8 + (Math.random() - 0.5) * 0.3, // More vertical spread
        Math.sin(t) * radius + (Math.random() - 0.5) * 0.2
      )
      
      velocities.push(
        Math.random() * 0.012 - 0.006, // Slightly slower for smoother motion
        Math.random() * 0.006,
        Math.random() * 0.012 - 0.006
      )
      
      // More varied teal and yellow colors
      const colorChoice = Math.random()
      const hue = colorChoice > 0.6 ? 0.48 : colorChoice > 0.3 ? 0.15 : 0.52 // Teal, yellow, or cyan
      const color = new THREE.Color().setHSL(hue, 0.85, 0.75)
      colors.push(color.r, color.g, color.b)
    }
    
    return { 
      positions: new Float32Array(positions), 
      velocities: new Float32Array(velocities),
      colors: new Float32Array(colors) 
    }
  }, [])

  useFrame((state) => {
    const time = state.clock.elapsedTime

    // Animate holographic core
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.1
      coreRef.current.rotation.y = time * 0.15
      coreRef.current.rotation.z = Math.sin(time * 0.08) * 0.2
      
      // Pulsing scale effect
      const scale = 1 + Math.sin(time * 2) * 0.1
      coreRef.current.scale.setScalar(scale)
    }

    // Animate orbital rings
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        ring.rotation.z = time * rings[i].speed
        ring.rotation.x = rings[i].tilt + Math.sin(time * 0.3 + i) * 0.1
      })
    }

    // Animate flowing particles
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array
      const velocities = particles.velocities
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i] + Math.sin(time + i) * 0.001
        positions[i + 1] += velocities[i + 1] + Math.cos(time * 0.5 + i) * 0.002
        positions[i + 2] += velocities[i + 2] + Math.sin(time * 0.8 + i) * 0.001
        
        // Boundary wrapping (smaller bounds)
        if (Math.abs(positions[i]) > 3.5) positions[i] *= -0.8 // Reduced from 6
        if (Math.abs(positions[i + 1]) > 2.5) positions[i + 1] *= -0.8 // Reduced from 4
        if (Math.abs(positions[i + 2]) > 3.5) positions[i + 2] *= -0.8 // Reduced from 6
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }

    // Animate energy field
    if (energyFieldRef.current) {
      energyFieldRef.current.rotation.x = -time * 0.02
      energyFieldRef.current.rotation.y = time * 0.03
      energyFieldRef.current.scale.setScalar(1 + Math.sin(time * 1.5) * 0.05)
    }
  })

  return (
    <group>
      {/* Holographic Core */}
      <points ref={coreRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={coreData.vertices.length / 3}
            array={coreData.vertices}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={coreData.colors.length / 3}
            array={coreData.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.10} // Slightly smaller for more refined look
          transparent={true}
          opacity={0.9}
          sizeAttenuation={true}
          vertexColors={true}
        />
      </points>

      {/* Orbital Rings */}
      <group ref={ringsRef}>
        {rings.map((ring, i) => (
          <mesh
            key={i}
            rotation={[ring.tilt, 0, 0]}
          >
            <torusGeometry args={[ring.radius, 0.06, 10, 40]} />
            <meshBasicMaterial
              color={ring.color}
              transparent={true}
              opacity={0.85}
            />
          </mesh>
        ))}
      </group>

      {/* Flowing Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          transparent={true}
          opacity={0.85}
          sizeAttenuation={true}
          vertexColors={true}
        />
      </points>

      {/* Energy Field (smaller and fewer) */}
      <group ref={energyFieldRef}>
        {[...Array(8)].map((_, i) => { // Reduced from 12
          const angle = (i / 8) * Math.PI * 2
          const radius = 3.2 // Reduced from 5
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 0.5) * 1.5, // Reduced from 2
                Math.sin(angle) * radius
              ]}
            >
              <sphereGeometry args={[0.025, 6, 6]} /> 
              <meshBasicMaterial
                color={i % 2 === 0 ? "#14B8A6" : "#F59E0B"} // Alternating teal and yellow
                transparent={true}
                opacity={0.5}
              />
            </mesh>
          )
        })}
      </group>

      {/* Dynamic Lighting (teal and yellow theme) */}
      <pointLight
        color={0x14B8A6} // Teal-500
        intensity={2}
        distance={12}
        position={[0, 0, 0]}
      />
      
      <pointLight
        color={0xF59E0B} // Amber-500 (yellow)
        intensity={1.5}
        distance={10}
        position={[3, 2, 2]}
      />

      <pointLight
        color={0x06B6D4} // Cyan-500 (light teal)
        intensity={1.2}
        distance={8}
        position={[-2, -1.5, 3]}
      />

      <pointLight
        color={0xFBBF24} // Amber-400 (bright yellow)
        intensity={1.5}
        distance={12}
        position={[0, 3, -2]}
      />
    </group>
  )
}

export default function TorusShape3D() {
  return (
    <div className="absolute inset-0 w-full h-full" style={{ background: 'transparent' }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }} 
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.15} />
        <HolographicNetwork />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  )
}
