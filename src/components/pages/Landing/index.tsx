import { FaRegUser } from "react-icons/fa6"
import LandingHook from "./hook"
import GameBoy from "../../organisms/GameBoy"

const Landing = () => {
	const { mountRef, scrollToHome, onClickCloseLogin, onClickOpenLogin, onLogin } = LandingHook()

	return (
		<div id="landing-page">
			<div id="landing">
				<div id="earth" ref={mountRef} />
			</div>
			<button onClick={onClickOpenLogin} className="login-button">
				<FaRegUser />
			</button>
			<button
				onClick={() => {
					scrollToHome()
					onClickCloseLogin()
				}}
				className="scroll-button"
			>
				🗺️
			</button>

			<GameBoy onClose={onClickCloseLogin} onLogin={onLogin} />
		</div>
	)
}

export default Landing
