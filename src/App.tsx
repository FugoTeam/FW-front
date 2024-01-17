import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import "./App.scss"

function App() {
	const mountRef = useRef(null) as unknown as React.MutableRefObject<HTMLDivElement>

	useEffect(() => {
		const width = mountRef.current?.clientWidth
		const height = mountRef.current?.clientHeight

		// Créer une scène, une caméra et un renderer
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
		const renderer = new THREE.WebGLRenderer()

		// Ajouter la caméra à la scène
		scene.add(camera)

		// Définir la taille du renderer et l'ajouter au DOM
		renderer.setSize(width, height)
		mountRef.current.appendChild(renderer.domElement)

		// Créer une sphère et appliquer une texture
		const geometry = new THREE.SphereGeometry(1, 32, 32)
		const texture = new THREE.TextureLoader().load("https://i.redd.it/4neyptkwv8t71.png")
		const material = new THREE.MeshBasicMaterial({ map: texture })
		const sphere = new THREE.Mesh(geometry, material)

		// Ajouter la sphère à la scène
		scene.add(sphere)

		// Créer des contrôles pour faire pivoter la sphère
		const controls = new OrbitControls(camera, renderer.domElement)
		controls.enableDamping = true
		controls.dampingFactor = 0.25
		controls.enableZoom = false

		// Positionner la caméra
		camera.position.z = 2

		// Fonction de rendu
		const animate = () => {
			requestAnimationFrame(animate)
			controls.update()
			renderer.render(scene, camera)
		}

		animate()

		const currentRef = mountRef.current

		return () => {
			scene.remove(sphere)
			renderer.dispose()
			currentRef.removeChild(renderer.domElement)
		}
	}, [])

	return (
		<div id="app">
			<div id="earth" ref={mountRef} />
			<div className="circle">
				<span style={{ "--i": 1 } as React.CSSProperties}> </span>
				<span style={{ "--i": 2 } as React.CSSProperties}>F</span>
				<span style={{ "--i": 3 } as React.CSSProperties}>U</span>
				<span style={{ "--i": 4 } as React.CSSProperties}>G</span>
				<span style={{ "--i": 5 } as React.CSSProperties}>O</span>
				<span style={{ "--i": 6 } as React.CSSProperties}> </span>
				<span style={{ "--i": 7 } as React.CSSProperties}>W</span>
				<span style={{ "--i": 8 } as React.CSSProperties}>O</span>
				<span style={{ "--i": 9 } as React.CSSProperties}>R</span>
				<span style={{ "--i": 10 } as React.CSSProperties}>L</span>
				<span style={{ "--i": 11 } as React.CSSProperties}>D</span>
			</div>
		</div>
	)
}

export default App
