export interface Item {
  imageUrl: string
  text: string
  link: string
}

export const items: Item[] = [
  {
    imageUrl: '/images/vr/uniswap-logo.png',
    text: 'Uniswap',
    link: 'https://uniswap.org',
  },
  {
    imageUrl: '/images/vr/opensea-logo.png',
    text: 'OpenSea',
    link: 'https://opensea.io',
  },
  // Add more items as needed
]
// components/ThreeScene.tsx
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    )
    mountRef.current.appendChild(renderer.domElement)

    // Lighting
    const light = new THREE.AmbientLight(0xffffff)
    scene.add(light)

    // Add point light for better illumination
    const pointLight = new THREE.PointLight(0x4444ff, 1, 100)
    pointLight.position.set(0, 0, 5)
    scene.add(pointLight)

    // Position camera
    camera.position.z = 5

    // Raycaster for click events
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    // Particles system
    const createParticles = (position: THREE.Vector3) => {
      const particlesGeometry = new THREE.BufferGeometry()
      const particleCount = 50
      const positions = new Float32Array(particleCount * 3)
      const velocities: THREE.Vector3[] = []

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3] = position.x
        positions[i3 + 1] = position.y
        positions[i3 + 2] = position.z

        velocities.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1
          )
        )
      }

      particlesGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      )
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0x4444ff,
        size: 0.05,
        transparent: true,
        opacity: 0.8,
      })

      const particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      return { particles, velocities }
    }

    let activeParticles: {
      particles: THREE.Points
      velocities: THREE.Vector3[]
    } | null = null

    // Load font
    const fontLoader = new FontLoader()
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      let xOffset = -items.length

      // Define consistent image size
      const IMAGE_WIDTH = 1
      const IMAGE_HEIGHT = 1

      items.forEach((item) => {
        // Create a group to hold image and text
        const group = new THREE.Group()
        group.position.x = xOffset

        // Create transparent white box to visualize group
        const boxGeometry = new THREE.BoxGeometry(1.2, 1.5, 0.1)
        const boxMaterial = new THREE.MeshPhongMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.2,
        })
        const box = new THREE.Mesh(boxGeometry, boxMaterial)
        box.position.y = -0.5
        box.userData = { link: item.link } // Move link to box only
        group.add(box)

        // Load image texture
        const textureLoader = new THREE.TextureLoader()
        const texture = textureLoader.load(item.imageUrl)
        texture.minFilter = THREE.LinearFilter
        texture.magFilter = THREE.LinearFilter

        // Create image plane with fixed dimensions
        const geometry = new THREE.PlaneGeometry(IMAGE_WIDTH, IMAGE_HEIGHT)
        const material = new THREE.MeshPhongMaterial({
          map: texture,
          emissive: new THREE.Color(0x4444ff),
          emissiveIntensity: 0,
        })
        const plane = new THREE.Mesh(geometry, material)
        group.add(plane)

        // Create text
        const textGeometry = new TextGeometry(item.text, {
          font: font,
          size: 0.2,
          height: 0.05,
        })
        const textMaterial = new THREE.MeshPhongMaterial({
          color: 0xffffff,
          emissive: new THREE.Color(0x4444ff),
          emissiveIntensity: 0,
        })
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)

        // Position text under the image
        textMesh.position.x = -0.5
        textMesh.position.y = -1
        group.add(textMesh)

        scene.add(group)
        xOffset += 2
      })
    })

    // OrbitControls for navigation
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true
    // Disable controls during hover/click interactions
    controls.enabled = false

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()

      // Update particles
      if (activeParticles) {
        const positions = activeParticles.particles.geometry.attributes.position
          .array as Float32Array
        for (let i = 0; i < positions.length / 3; i++) {
          const i3 = i * 3
          positions[i3] += activeParticles.velocities[i].x
          positions[i3 + 1] += activeParticles.velocities[i].y
          positions[i3 + 2] += activeParticles.velocities[i].z
        }
        activeParticles.particles.geometry.attributes.position.needsUpdate =
          true
      }

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const onWindowResize = () => {
      if (!mountRef.current) return

      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()

      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      )
    }
    window.addEventListener('resize', onWindowResize)

    // Event listener for clicks
    const onMouseClick = (event: MouseEvent) => {
      if (!mountRef.current) return

      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / mountRef.current.clientWidth) * 2 - 1
      mouse.y = -(event.clientY / mountRef.current.clientHeight) * 2 + 1

      // Update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, camera)

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(scene.children, true)

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object
        if (
          clickedObject instanceof THREE.Mesh &&
          clickedObject.userData.link
        ) {
          window.open(clickedObject.userData.link, '_blank')
        }
      }
    }

    let isHovering = false
    let hoverTimeout: NodeJS.Timeout | null = null
    let currentHoverObject: THREE.Mesh | null = null

    // Event listener for mouse move to change cursor and show tooltip
    const onMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return

      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / mountRef.current.clientWidth) * 2 - 1
      mouse.y = -(event.clientY / mountRef.current.clientHeight) * 2 + 1

      // Update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, camera)

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(scene.children, true)

      // Clear previous hover timeout
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }

      hoverTimeout = setTimeout(() => {
        // Reset previous hover state
        if (
          currentHoverObject &&
          currentHoverObject.material instanceof THREE.MeshPhongMaterial
        ) {
          currentHoverObject.material.emissiveIntensity = 0
        }

        // Remove previous particles if they exist and not hovering
        if (activeParticles && !isHovering) {
          scene.remove(activeParticles.particles)
          activeParticles = null
        }

        if (intersects.length > 0) {
          const hoveredObject = intersects[0].object
          if (
            hoveredObject instanceof THREE.Mesh &&
            hoveredObject.userData.link
          ) {
            if (currentHoverObject !== hoveredObject) {
              isHovering = true
              currentHoverObject = hoveredObject
              controls.enabled = false
              mountRef.current!.style.cursor = 'pointer'
              mountRef.current!.title = hoveredObject.userData.link

              // Apply glow effect only to the box
              if (hoveredObject.material instanceof THREE.MeshPhongMaterial) {
                hoveredObject.material.emissive.setHex(0x4444ff)
                hoveredObject.material.emissiveIntensity = 0.5
              }

              // Create particles around the hovered object if not already present
              if (!activeParticles) {
                activeParticles = createParticles(hoveredObject.position)
              }
            }
          } else {
            resetHoverState()
          }
        } else {
          resetHoverState()
        }
      }, 100) // Add 100ms delay before updating hover state
    }

    const resetHoverState = () => {
      isHovering = false
      if (
        currentHoverObject &&
        currentHoverObject.material instanceof THREE.MeshPhongMaterial
      ) {
        currentHoverObject.material.emissiveIntensity = 0
      }
      currentHoverObject = null
      controls.enabled = true
      if (mountRef.current) {
        mountRef.current.style.cursor = 'default'
        mountRef.current.title = ''
      }
    }

    mountRef.current.addEventListener('click', onMouseClick)
    mountRef.current.addEventListener('mousemove', onMouseMove)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', onWindowResize)
      mountRef.current?.removeEventListener('click', onMouseClick)
      mountRef.current?.removeEventListener('mousemove', onMouseMove)
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
      renderer.dispose()
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
}

export default ThreeScene
