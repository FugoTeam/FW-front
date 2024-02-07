import { useEffect, useState } from "react"
import gsap from "gsap"

const HomeHook = () => {
	const [viewport, setViewport] = useState({ width: 0, height: 0 })
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		setViewport({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}, [])

	const scrollToLanding = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	const handleOpenMenu = () => {
		const radius = 150 // rayon du cercle
		const start = 120 // angle de départ en degrés
		const buttons = 5 // nombre total de boutons

		gsap.to(".f0", { duration: 1, rotate: 180, ease: "power2.inOut" })

		for (let i = 1; i < buttons; i++) {
			const angle = start + (360 / 8) * i
			const x = radius * Math.cos((angle * Math.PI) / 180) - 20
			const y = radius * Math.sin((angle * Math.PI) / 180) - 10

			gsap.to(`.f${i}`, { duration: 1, x: `${x}%`, y: `${y}%`, ease: "power2.inOut" })
		}
	}

	const handleCloseMenu = () => {
		gsap.to(".f0", { duration: 1, rotate: 0, ease: "power2.inOut" })
		gsap.to(".f1", { duration: 1, x: "-25%", y: "-25%", ease: "power2.inOut" })
		gsap.to(".f2", { duration: 1, x: "-25%", y: "-25%", ease: "power2.inOut" })
		gsap.to(".f3", { duration: 1, x: "-25%", y: "-25%", ease: "power2.inOut" })
		gsap.to(".f4", { duration: 1, x: "-25%", y: "-25%", ease: "power2.inOut" })
	}

	return { viewport, scrollToLanding, handleOpenMenu, isMenuOpen, setIsMenuOpen, handleCloseMenu }
}

export default HomeHook
