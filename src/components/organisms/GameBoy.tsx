import { useState, useRef } from "react"
import { FaCaretUp, FaCaretRight, FaCaretDown, FaCaretLeft } from "react-icons/fa6"

import Cartridge from "./Cartridge"
import "../../GameBoy.scss"

type Props = {
	onClose: () => void
	onLogin: () => void
}

const GameBoy: React.FC<Props> = (props) => {
	const [formState, setFormState] = useState("signin" as "signin" | "signup")
	const [inputFocused, setInputFocused] = useState("" as "username" | "password" | "confirm-password" | "")
	const [isLogin, setIsLogin] = useState(false)
	const [isSignup, setIsSignup] = useState(false)

	const { onClose, onLogin } = props

	const usernameRef = useRef<HTMLInputElement | null>(null)
	const passwordRef = useRef<HTMLInputElement | null>(null)
	const confirmRef = useRef<HTMLInputElement | null>(null)

	const handleUpDownClick = (direction: "up" | "down") => {
		if (direction === "up") {
			if (inputFocused === "") {
				setInputFocused("username")
				usernameRef.current?.focus()
			}
			if (inputFocused === "username") {
				if (formState === "signin") {
					setInputFocused("password")
					passwordRef.current?.focus()
				} else {
					setInputFocused("confirm-password")
					confirmRef.current?.focus()
				}
			}
			if (inputFocused === "password") {
				setInputFocused("username")
				usernameRef.current?.focus()
			}
			if (inputFocused === "confirm-password") {
				setInputFocused("password")
				passwordRef.current?.focus()
			}
		}
		if (direction === "down") {
			if (inputFocused === "") {
				if (formState === "signin") {
					setInputFocused("password")
					passwordRef.current?.focus()
				} else {
					setInputFocused("confirm-password")
					confirmRef.current?.focus()
				}
			}
			if (inputFocused === "username") {
				setInputFocused("password")
				passwordRef.current?.focus()
			}
			if (inputFocused === "password") {
				if (formState === "signin") {
					setInputFocused("username")
					usernameRef.current?.focus()
				} else {
					setInputFocused("confirm-password")
					confirmRef.current?.focus()
				}
			}
			if (inputFocused === "confirm-password") {
				setInputFocused("username")
				usernameRef.current?.focus()
			}
		}
	}

	const handleRightLeftClick = () => {
		if (formState === "signin") {
			setFormState("signup")
		} else {
			setFormState("signin")
		}
	}

	return (
		<>
			<Cartridge />
			<div className="gameboy" id="GameBoy">
				<div className="screen-area">
					<form style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
						{isLogin || isSignup ? (
							<>
								<p className="success-login">{"( * ( * ( * ("}</p>
								<p className="success-login">{formState === "signin" ? "Connected!" : "Registered!"}</p>
								<p className="success-login">{"( * ( * ( * ("}</p>
							</>
						) : (
							<>
								<div className="login-title">
									<p style={{ color: formState === "signin" ? "#E2493D" : "#23252d" }}>Connexion</p>
									<p> - </p>
									<p style={{ color: formState === "signup" ? "#E2493D" : "#23252d" }}>Inscription</p>
								</div>
								<div style={{ width: "70%", display: "flex", flexDirection: "column", gap: "5px" }}>
									<input className="login-input" ref={usernameRef} type="text" placeholder="Username" />
									<input className="login-input" ref={passwordRef} type="password" placeholder="Password" />
									{formState === "signup" && <input className="login-input" ref={confirmRef} type="password" placeholder="Confirm password" />}
								</div>
							</>
						)}
					</form>

					<div className="power">
						<div className="indicator">
							<div className="led"></div>
							<span className="arc" style={{ zIndex: 2 }}></span>
							<span className="arc" style={{ zIndex: 1 }}></span>
							<span className="arc" style={{ zIndex: 0 }}></span>
						</div>
						POWER
					</div>

					<canvas className="display" id="mainCanvas"></canvas>

					<div className="label">
						<div className="title">FUGO </div>
						<div className="subtitle">
							<span className="c">W</span>
							<span className="o1">O</span>
							<span className="l">R</span>
							<span className="o2">L</span>
							<span className="r">D</span>
						</div>
					</div>
				</div>

				<div className="nintendo"></div>

				<div className="controls">
					<div className="dpad">
						<div className="up" onClick={() => handleUpDownClick("up")}>
							<FaCaretUp color="#67879a" />
						</div>
						<div className="right" onMouseDown={handleRightLeftClick}>
							<FaCaretRight color="#67879a" />
						</div>
						<div className="down" onClick={() => handleUpDownClick("down")}>
							<FaCaretDown color="#67879a" />
						</div>
						<div className="left" onMouseDown={handleRightLeftClick}>
							<FaCaretLeft color="#67879a" />
						</div>
						<div className="middle"></div>
					</div>
					<div className="a-b">
						<div className="b">B</div>
						<div className="a">A</div>
					</div>
				</div>

				<div className="start-select">
					<div className="select" onClick={onClose}>
						CLOSE
					</div>
					<div
						className="start"
						onClick={() => {
							if (formState === "signin") {
								onLogin()
								setTimeout(() => {
									setIsLogin(true)
								}, 2000)
							} else {
								onLogin()
								setIsSignup(true)
							}
						}}
					>
						{formState === "signin" ? "LOGIN" : "SIGNUP"}
					</div>
				</div>

				<div className="speaker">
					<div className="dot placeholder"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot placeholder"></div>

					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>

					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>

					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>

					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>

					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>

					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>

					<div className="dot placeholder"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot closed"></div>
					<div className="dot open"></div>
					<div className="dot placeholder"></div>
				</div>
			</div>
		</>
	)
}

export default GameBoy
