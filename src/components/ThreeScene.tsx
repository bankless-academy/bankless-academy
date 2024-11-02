'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

interface Item {
  imageUrl: string
  text: string
  link: string
}

export default function ThreeWorld() {
  const mountRef = useRef<HTMLDivElement>(null)
  const items: Item[] = [
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
  ]

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Camera position
    camera.position.z = 5

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(0, 1, 2)
    scene.add(directionalLight)

    // Create boxes for each item
    const boxes: THREE.Mesh[] = []
    const boxGeometry = new THREE.BoxGeometry(1.5, 2, 0.1)
    const textureLoader = new THREE.TextureLoader()

    items.forEach((item, index) => {
      // Create material for the box
      const boxMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
      })

      const box = new THREE.Mesh(boxGeometry, boxMaterial)
      box.position.x = (index - items.length / 2 + 0.5) * 2
      boxes.push(box)
      scene.add(box)

      // Load and add image
      textureLoader.load(item.imageUrl, (texture) => {
        const imageGeometry = new THREE.PlaneGeometry(1, 1)
        const imageMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
        })
        const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial)
        imageMesh.position.z = 0.06
        imageMesh.position.y = 0.2
        box.add(imageMesh)

        // Add text
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        if (context) {
          canvas.width = 256
          canvas.height = 64
          context.fillStyle = '#000000'
          context.font = 'bold 32px Arial'
          context.textAlign = 'center'
          context.fillText(item.text, canvas.width / 2, canvas.height / 2)

          const textTexture = new THREE.CanvasTexture(canvas)
          const textGeometry = new THREE.PlaneGeometry(1, 0.25)
          const textMaterial = new THREE.MeshBasicMaterial({
            map: textTexture,
            transparent: true,
          })
          const textMesh = new THREE.Mesh(textGeometry, textMaterial)
          textMesh.position.y = -0.6
          textMesh.position.z = 0.06
          box.add(textMesh)
        }
      })
    })

    // Raycaster for interaction
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let hoveredBox: THREE.Mesh | null = null

    // Mouse move handler
    const onMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(boxes)

      // Reset all boxes to white
      boxes.forEach((box) => {
        ;(box.material as THREE.MeshPhongMaterial).color.setHex(0xffffff)
      })

      // Change cursor and color on hover
      if (intersects.length > 0) {
        hoveredBox = intersects[0].object as THREE.Mesh
        ;(hoveredBox.material as THREE.MeshPhongMaterial).color.setHex(0xffd700)
        document.body.style.cursor = 'pointer'
      } else {
        hoveredBox = null
        document.body.style.cursor = 'default'
      }
    }

    // Click handler
    const onClick = () => {
      if (hoveredBox) {
        const index = boxes.indexOf(hoveredBox)
        if (index !== -1) {
          window.open(items[index].link, '_blank')
        }
      }
    }

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('click', onClick)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onClick)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-screen" />
}
