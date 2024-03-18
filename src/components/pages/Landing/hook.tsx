import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
// import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { TextGeometry } from "three/addons/geometries/TextGeometry.js"
import { FontLoader } from "three/addons/loaders/FontLoader.js"
import gsap from "gsap"

const LandingHook = () => {
	const [cam, setCam] = useState<THREE.PerspectiveCamera>(new THREE.PerspectiveCamera())

	const mountRef = useRef(null) as unknown as React.MutableRefObject<HTMLDivElement>

	useEffect(() => {
		const width = mountRef.current?.clientWidth
		const height = mountRef.current?.clientHeight

		// Créer une scène, une caméra et un renderer
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000)
		setCam(camera)
		const renderer = new THREE.WebGLRenderer()

		// Ajouter la caméra à la scène
		scene.add(camera)

		// Définir la taille du renderer et l'ajouter au DOM
		renderer.setSize(width, height)
		mountRef.current.appendChild(renderer.domElement)

		// Créer une sphère et appliquer une texture
		const geometry = new THREE.SphereGeometry(1, 32, 32)
		const texture = new THREE.TextureLoader().load("src/assets/minecraft_map.webp")
		const material = new THREE.MeshBasicMaterial({ map: texture })
		const sphere = new THREE.Mesh(geometry, material)

		// Ajouter la sphère à la scène
		scene.add(sphere)

		// Créer des contrôles pour faire pivoter la sphère
		// const controls = new OrbitControls(camera, renderer.domElement)
		// controlsRef.current = controls
		// controls.enableDamping = true
		// controls.dampingFactor = 0.25
		// controls.enableZoom = true

		// Positionner la caméra
		camera.position.z = 2.5

		// Appliquer un fond transparent
		const background = new THREE.Color(0x000000)
		renderer.setClearColor(background, 0)

		// Ajouter des lettre en 3D
		const letters = "    DLROW OGUF    "
		const textureText = new THREE.TextureLoader().load("src/assets/DALLE.png")
		// const textMaterial = new THREE.MeshBasicMaterial({ color: 0xe24c4c })
		const textMaterial = new THREE.MeshBasicMaterial({ map: textureText })
		const loader = new FontLoader()
		const textGroup = new THREE.Group()

		loader.load("src/assets/Roboto_Black.json", (font) => {
			for (let i = 0; i < letters.length; i++) {
				const letter = letters[i]
				const textGeometry = new TextGeometry(letter, {
					font: font,
					size: 0.1,
					height: 0.01,
					curveSegments: 12,
					bevelEnabled: false,
				})
				const text = new THREE.Mesh(textGeometry, textMaterial)
				text.position.x = Math.cos((i / letters.length) * Math.PI * 2) * 1.2
				text.position.z = Math.sin((i / letters.length) * Math.PI * 2) * 1.2
				text.position.y = 0
				text.lookAt(new THREE.Vector3(0, 0, 0))
				text.rotateY(Math.PI)
				textGroup.add(text)
			}
			textGroup.rotation.z = THREE.MathUtils.degToRad(-15)
			scene.add(textGroup)
		})

		// Fonction de rendu
		const animate = () => {
			requestAnimationFrame(animate)
			// controls.update()
			sphere.rotation.y += 0.001
			textGroup.rotation.y -= 0.01
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

	const handleScroll = (event: { deltaY: number }) => {
		if (event.deltaY > 0) {
			gsap.to(cam.position, { duration: 2, z: 2.5, ease: "power2.inOut" })
			gsap.to(cam.position, { duration: 2, y: 0, ease: "power2.inOut" })
			gsap.to(cam.position, { duration: 2, x: 0, ease: "power2.inOut" })
		} else {
			gsap.to(cam.position, { duration: 2, z: 1, ease: "power2.inOut" })
			gsap.to(cam.position, { duration: 2, y: 1.2, ease: "power2.inOut" })
		}
	}

	const scrollToHome = () => {
		const windowHeight = window.innerHeight
		window.scrollTo({ top: windowHeight, behavior: "smooth" })
	}

	const onClickCloseLogin = () => {
		gsap.to(".login-form", { duration: 2, x: "200%", ease: "power2.inOut" })
		handleScroll({ deltaY: 1 })
	}

	const onClickOpenLogin = () => {
		gsap.to(".login-form", { duration: 2, x: "-50%", ease: "power2.inOut" })
		handleScroll({ deltaY: -1 })
	}

	return { mountRef, scrollToHome, onClickCloseLogin, onClickOpenLogin }
}

export default LandingHook
