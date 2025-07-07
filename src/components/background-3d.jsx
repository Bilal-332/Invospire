"use client"

import { useEffect, useRef } from 'react'

export default function Background3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 3D Shapes data
    const shapes = []
    const numShapes = 20

    // Initialize shapes
    for (let i = 0; i < numShapes; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        rotationX: Math.random() * Math.PI * 2,
        rotationY: Math.random() * Math.PI * 2,
        rotationZ: Math.random() * Math.PI * 2,
        rotationSpeedX: (Math.random() - 0.5) * 0.02,
        rotationSpeedY: (Math.random() - 0.5) * 0.02,
        rotationSpeedZ: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 50 + 20,
        type: Math.floor(Math.random() * 3), // 0: cube, 1: sphere, 2: pyramid
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`, // Blue to purple range
        opacity: Math.random() * 0.3 + 0.1
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach(shape => {
        // Update rotation
        shape.rotationX += shape.rotationSpeedX
        shape.rotationY += shape.rotationSpeedY
        shape.rotationZ += shape.rotationSpeedZ

        // Update position (floating effect)
        shape.y += Math.sin(Date.now() * 0.001 + shape.x * 0.01) * 0.5

        // Wrap around screen
        if (shape.y > canvas.height + shape.size) {
          shape.y = -shape.size
        }
        if (shape.y < -shape.size) {
          shape.y = canvas.height + shape.size
        }

        // Calculate 3D projection
        const scale = 400 / (400 + shape.z)
        const projectedX = shape.x * scale
        const projectedY = shape.y * scale
        const projectedSize = shape.size * scale

        ctx.save()
        ctx.translate(projectedX, projectedY)
        ctx.scale(scale, scale)
        
        // Set style
        ctx.globalAlpha = shape.opacity * scale
        ctx.fillStyle = shape.color
        ctx.strokeStyle = shape.color
        ctx.lineWidth = 2

        // Draw shape based on type
        if (shape.type === 0) {
          // Cube
          drawCube(ctx, projectedSize, shape.rotationX, shape.rotationY, shape.rotationZ)
        } else if (shape.type === 1) {
          // Sphere
          drawSphere(ctx, projectedSize)
        } else {
          // Pyramid
          drawPyramid(ctx, projectedSize, shape.rotationX, shape.rotationY)
        }

        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    // Drawing functions
    const drawCube = (ctx, size, rotX, rotY, rotZ) => {
      const half = size / 2
      
      // Simple 3D cube wireframe
      ctx.beginPath()
      ctx.strokeRect(-half, -half, size, size)
      
      // Add some 3D effect with rotation
      ctx.save()
      ctx.rotate(rotZ)
      ctx.strokeRect(-half * 0.8, -half * 0.8, size * 0.8, size * 0.8)
      ctx.restore()
    }

    const drawSphere = (ctx, size) => {
      ctx.beginPath()
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
      ctx.stroke()
      
      // Add some lines for 3D effect
      ctx.beginPath()
      ctx.ellipse(0, 0, size / 2, size / 4, 0, 0, Math.PI * 2)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.ellipse(0, 0, size / 4, size / 2, Math.PI / 2, 0, Math.PI * 2)
      ctx.stroke()
    }

    const drawPyramid = (ctx, size, rotX, rotY) => {
      const half = size / 2
      
      ctx.save()
      ctx.rotate(rotY)
      
      ctx.beginPath()
      ctx.moveTo(0, -half)
      ctx.lineTo(-half, half)
      ctx.lineTo(half, half)
      ctx.closePath()
      ctx.stroke()
      
      // Add depth lines
      ctx.beginPath()
      ctx.moveTo(0, -half)
      ctx.lineTo(0, 0)
      ctx.stroke()
      
      ctx.restore()
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}
