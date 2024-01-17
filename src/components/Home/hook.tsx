import { useEffect, useState } from "react"

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

	return { viewport, scrollToLanding, isMenuOpen, setIsMenuOpen }
}

export default HomeHook
