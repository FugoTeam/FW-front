import React from "react"

type Props = {
	onClose?: () => void
}

const LoginForm: React.FC<Props> = (props) => {
	const { onClose } = props
	return (
		<div className={"login-form"}>
			<button
				onClick={() => {
					if (onClose) onClose()
				}}
				className="close-button"
			>
				×
			</button>
			<div className="FW-title">
				<span style={{ "--i": 1 } as React.CSSProperties}>F</span>
				<span style={{ "--i": 2 } as React.CSSProperties}>U</span>
				<span style={{ "--i": 3 } as React.CSSProperties}>G</span>
				<span style={{ "--i": 4 } as React.CSSProperties}>O</span>
				<span style={{ "--i": 5 } as React.CSSProperties}> </span>
				<span style={{ "--i": 6 } as React.CSSProperties}>W</span>
				<span style={{ "--i": 7 } as React.CSSProperties}>O</span>
				<span style={{ "--i": 8 } as React.CSSProperties}>R</span>
				<span style={{ "--i": 9 } as React.CSSProperties}>L</span>
				<span style={{ "--i": 10 } as React.CSSProperties}>D</span>
			</div>
			<input type="text" placeholder="Username" />
			<input type="password" placeholder="Password" />
			<button className="submit-button">Login</button>
		</div>
	)
}

export default LoginForm
