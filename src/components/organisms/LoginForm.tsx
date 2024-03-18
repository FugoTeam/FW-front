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
			<h3>Login</h3>
			<input type="text" placeholder="Username" />
			<input type="password" placeholder="Password" />
			<button className="submit-button">Se connecter</button>
		</div>
	)
}

export default LoginForm
