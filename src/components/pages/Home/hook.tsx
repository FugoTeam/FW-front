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
		gsap.to(".f0", { duration: 1, rotate: 180, ease: "power2.inOut" })
		gsap.to(".f1", { duration: 1, x: "-85%", y: "-125%", ease: "power2.inOut" })
		gsap.to(".f2", { duration: 1, x: "45%", y: "-125%", ease: "power2.inOut" })
		gsap.to(".f3", { duration: 1, x: "-125%", y: "65%", ease: "power2.inOut" })
		gsap.to(".f4", { duration: 1, x: "-150%", y: "-40%", ease: "power2.inOut" })
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
