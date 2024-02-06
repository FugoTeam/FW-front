import { FaRegUser } from "react-icons/fa6"
import LandingHook from "./hook"
import LoginForm from "../../organisms/LoginForm"

const Landing = () => {
	const { mountRef, scrollToHome, onClickCloseLogin, onClickOpenLogin } = LandingHook()

	return (
		<div id="landing-page">
			<div id="landing">
				<div id="earth" ref={mountRef} />
				{/* <div className="circle">
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
				</div> */}
			</div>
			<button onClick={onClickOpenLogin} className="login-button">
				<FaRegUser />
			</button>
			<button onClick={scrollToHome} className="scroll-button">
				🗺️
			</button>

			<LoginForm onClose={onClickCloseLogin} />
		</div>
	)
}

export default Landing
