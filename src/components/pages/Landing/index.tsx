import { FaRegUser } from "react-icons/fa6"
import LandingHook from "./hook"
import LoginForm from "../../organisms/LoginForm"

const Landing = () => {
	const { mountRef, scrollToHome, onClickCloseLogin, onClickOpenLogin } = LandingHook()

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

			<LoginForm onClose={onClickCloseLogin} />
		</div>
	)
}

export default Landing
