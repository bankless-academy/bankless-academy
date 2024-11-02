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

    // Position camera
    camera.position.z = 5

    // Raycaster for click events
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    // Load font
    const fontLoader = new FontLoader()
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      let xOffset = -items.length

      items.forEach((item) => {
        // Load image texture
        const textureLoader = new THREE.TextureLoader()
        const texture = textureLoader.load(item.imageUrl)

        // Create image plane
        const geometry = new THREE.PlaneGeometry(1, 1)
        const material = new THREE.MeshBasicMaterial({ map: texture })
        const plane = new THREE.Mesh(geometry, material)
        plane.position.x = xOffset
        plane.userData = { link: item.link }

        scene.add(plane)

        // Create text
        const textGeometry = new TextGeometry(item.text, {
          font: font,
          size: 0.2,
          height: 0.05,
        })
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)

        // Position text under the image
        textMesh.position.x = xOffset - 0.5
        textMesh.position.y = -1

        scene.add(textMesh)

        xOffset += 2
      })
    })

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
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
        const firstIntersect = intersects[0].object
        if (firstIntersect.userData.link) {
          window.open(firstIntersect.userData.link, '_blank')
        }
      }
    }

    mountRef.current.addEventListener('click', onMouseClick)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', onWindowResize)
      mountRef.current?.removeEventListener('click', onMouseClick)
      renderer.dispose()
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
}

export default ThreeScene
