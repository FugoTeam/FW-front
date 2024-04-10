import React from "react"
import { GiExitDoor } from "react-icons/gi"
import { useNavigate } from "react-router-dom"

import Bronze from "../../assets/Bronze.png"
import Silver from "../../assets/Silver.png"
import Gold from "../../assets/Gold.png"
import Platinum from "../../assets/Platinium.png"

const TabBar: React.FC = () => {
	const scrollToLanding = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	const navigate = useNavigate()

	const fugos = [Bronze, Silver, Gold, Platinum]

	return (
		<div id="tab-bar">
			<button
				style={{ backgroundColor: "transparent" }}
				onClick={() => {
					navigate("/")
					scrollToLanding()
				}}
			>
				<GiExitDoor color="#FFF" size={30} />
			</button>

			<div style={{ marginRight: "20px", display: "flex", alignItems: "center", gap: "20px" }}>
				<p style={{ fontWeight: 600 }}>42</p>
				<img
					src={fugos[0]}
					alt="Bronze"
					width={30}
					height={50}
					style={{ cursor: "pointer" }}
					onClick={() => {
						navigate("/profile")
					}}
				/>
			</div>
		</div>
	)
}

export default TabBar
