import { useState, useEffect } from "react"
// import gsap from "gsap"

import Avatar from "../../../assets/Avatar.png"

const ProfileHook = () => {
	const [pseudo, setPseudo] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [spots, setSpots] = useState(0)
	const [score, setScore] = useState(0)
	const [travels, setTravels] = useState(0)
	const [avatar, setAvatar] = useState("")
	const [viewport, setViewport] = useState({ width: 0, height: 0 })

	useEffect(() => {
		setPseudo("John Doe")
		setEmail("john.doe@gmail.com")
		setPassword("********")
		setSpots(3)
		setScore(100)
		setTravels(5)
		setAvatar(Avatar)
		setViewport({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}, [])

	return { pseudo, email, password, spots, score, travels, avatar, setPseudo, setEmail, setPassword, setAvatar, viewport }
}

export default ProfileHook
